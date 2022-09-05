require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("make socket connection", socket.id);
  socket.on("chat message", (form) => {
    console.log("get data: ", form);
    socket.emit("get new chat", form);
  });
});

server.listen(PORT, () => {
  console.log(`Listen to port ${PORT}`);
});
