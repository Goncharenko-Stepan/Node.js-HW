import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";

const app = express();
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3000;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in .env");
}

// Массив юзеров
const users = [
  {
    id: 1,
    username: "john_doe",
    email: "john.doe@example.com",
    password: await bcrypt.hash("password123", 10),
    role: "admin",
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane.smith@example.com",
    password: await bcrypt.hash("securepass456", 10),
    role: "user",
  },
];

// мидлвара для проверки токена
const authenticateJWT = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).send("Access token is missing or invalid");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).send("Invalid or expired token");
  }
};
const authorizeRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).send("Access denied: insufficient permissions");
  }
  next();
};
// Проверка состояния сервера
app.get("/", (_, res) => {
  res.send("Сервер работает исправно");
});

// Логин
app.post("/login", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send("All fields must be filled in");
  }

  try {
    const user = users.find(
      (u) => u.username === username && u.email === email
    );

    if (!user) {
      return res.status(404).send("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send("Invalid password");
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

// Обновление email
app.put("/update-email", authenticateJWT, (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("New email must be provided");
  }

  try {
    const user = users.find((u) => u.id === req.user.id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    user.email = email;
    res.status(200).json({ message: "Email updated successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.put("/update-role", authenticateJWT, authorizeRole("admin"), (req, res) => {
  const { userId, newRole } = req.body;

  if (!userId || !newRole) {
    return res.status(400).send("User ID and new role must be provided");
  }

  try {
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    user.role = newRole;
    res.status(200).json({ message: "Role updated successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.delete("/delete-account", authenticateJWT, async (req, res) => {
  try {
    const userID = req.user.id;

    const userIndex = users.findIndex((user) => user.id === userID);

    if (userIndex === -1) {
      return res.status(404).send("User is not found");
    }

    users.splice(userIndex, 1);

    res.status(200).json({ message: "Account successfully deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.post("/refresh-token", (req, res) => {
  const refreshToken = req.headers["x-refresh-token"];

  if (!refreshToken) {
    return res.status(401).send("Refresh token is missing");
  }

  try {
    const decoded = jwt.verify(refreshToken, JWT_SECRET);

    const newToken = jwt.sign(
      { id: decoded.id, username: decoded.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Token refreshed", token: newToken });
  } catch (error) {
    return res.status(403).send("Invalid or expired refresh token");
  }
});
app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});
