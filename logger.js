const fs = require("fs");

function logMessage(message) {
  const logEntry = `${message}\n`;
  fs.appendFile("log.txt", logEntry, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    }
  });
}

module.exports = logMessage;
