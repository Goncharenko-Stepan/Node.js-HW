import express from "express";
import bcrypt from "bcrypt";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const users = [
  {
    id: 1,
    username: "user1",
    password: "$2b$10$EIXGFz1QluTfOCn/ztkZQ.BXHytVgMbdRsnkrpSALubslcFZP6Uyy",
    email: "user1@example.com",
    name: "User One",
    role: "user",
    mustChangePassword: false,
  },
  {
    id: 2,
    username: "user2",
    password: "$2b$10$EIXGFz1QluTfOCn/ztkZQ.BXHytVgMbdRsnkrpSALubslcFZP6Uyy",
    email: "user2@example.com",
    name: "User Two",
    role: "admin",
    mustChangePassword: true,
  },
];

const findUserByEmail = () => users.find((user) => (user.email = email));
// ** Регистрация **
app.post("/register", async (req, res) => {
  const { email, password, username, name } = req.body;

  if (!email || !password || !username || !name) {
    return res.status(400).send("Пожалуйста, заполните все поля");
  }

  const existingUser = findUserByEmail(email);
  if (existingUser) {
    return res.status(400).send("Этот email уже зарегистрирован");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      username,
      password: hashedPassword,
      email,
      name,
      role: "user",
      mustChangePassword: false,
    };

    users.push(newUser);

    res.status(201).send("Пользователь успешно зарегистрирован");
  } catch (err) {
    console.error("Ошибка при регистрации пользователя:" + err);
    res.status(500).send("Произошла ошибка на сервере");
  }
});
// ** Смена пароля **
app.post("/change-password", async (req, res) => {
  const { email, newPassword } = req.body;
  const user = findByEmail(email);
  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.mustChangePassword = false;
    res.status(200).json({ message: "Пароль успешно изменен" });
  } catch (err) {
    console.error("Ошибка при смене пароля!" + err);
    res.status(500).json({ message: "Ошибка на сервере" });
  }
});
// ** Удаление аккаунта **
app.post("/delete-account", async (req, res) => {
  const { email, password } = req.body;
  const user = findByEmail(email);
  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден!" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    res.status(400).json({ message: "Неверный пароль" });
  }
  const index = users.findIndex((u) => u.email === email);
  if (index !== -1) {
    users.splice(index, 1);
    return res.status(200).send("Аккаунт успешно удален");
  }

  res.status(500).send("Ошибка при удалении аккаунта");
});
// *** Ограничение доступа по роли ***

app.get("/admin", (req, res) => {
  const { email } = req.body;
  const user = findByEmail(email);
  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден!" });
  }

  if (user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Доступ запрещён: Требуется роль администратора" });
  }
  res.status(200);
});

// ** Смена email **

app.post("/change-email", async (req, res) => {
  const { email, newEmail, password } = req.body;

  const user = findUserByEmail(email);
  if (!user) {
    return res.status(404).send("Пользователь не найден");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Неверный пароль" });
  }

  if (findUserByEmail(newEmail)) {
    return res.status(400).json({ message: "Данная почта уже используется" });
  }
  user.email = newEmail;
  res.status(200).json({ message: "Ваша почта была обновлена" });
});

app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});
