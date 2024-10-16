import { EventEmitter } from "events";

const initEmit = new EventEmitter();

const sendMessage = (username, message, eventObj) => {
  eventObj.emit("onMessage", { username, message });
};

initEmit.on("onMessage", (data) => {
  console.log(`[${data.username}: ${data.message}]`);
});

initEmit.on("chatApp", (username, message) => {
  sendMessage(username, message, initEmit);
});

initEmit.emit("chatApp", "John", "Hello everyone");
