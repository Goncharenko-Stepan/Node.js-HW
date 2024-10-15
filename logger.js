import { promises as fsPromises } from "fs";
async function logMessage(message) {
  const logEntry = `${message}\n`;
  try {
    await fsPromises.appendFile("log.txt", logEntry);
  } catch (err) {
    console.log("Error: " + err);
  }
}
export default logMessage;
