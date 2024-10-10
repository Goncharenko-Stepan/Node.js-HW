import { EventEmitter } from "events";

const initEmit = new EventEmitter();

function sendMessage(username, message, initEmit) {
  initEmit.emit("message", { username, message });
}

initEmit.on("message", (data) => {
  console.log(`[${data.username}: ${data.message}]`);
});

initEmit.on("chatApp", (username, message) => {
  sendMessage(username, message, initEmit);
});

initEmit.emit("chatApp", "John", "Hello everyone");
