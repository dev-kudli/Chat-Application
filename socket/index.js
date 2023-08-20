const http = require("http");
const dotenv = require("dotenv");
const socketIO = require("socket.io");
const express = require("express");

const { Connection } = require("database");
const userHandler = require("./src/userHandler");
const messageHandler = require("./src/messageHandler");

const users = [];
const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT;

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});
Connection.connect();

const onConnection = (socket) => {
  userHandler(io, socket, users);
  messageHandler(io, socket, users);
};

// Event listener for new socket connections
io.on("connection", onConnection);

// Start the WebSocket server listening
server.listen(WEBSOCKET_PORT, () => {
  init();
});

// Your initialization function
function init() {
  console.log(`Socket listening on ${WEBSOCKET_PORT}`);
}
