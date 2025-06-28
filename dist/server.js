'use strict';

var node_http = require('node:http');
var node_url = require('node:url');
var next = require('next');
var dotenv = require('dotenv');
var socket_io = require('socket.io');

let io;
const initSocketSingleton = () => {
  if (!io) {
    io = new socket_io.Server({
      cors: {
        origin: "*"
      }
    });
    io.on("connection", (socket) => {
      console.log("\u{1F7E2} A user connected:", socket.id);
      socket.emit("welcome", "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E2A\u0E39\u0E48 Dashboard");
      socket.on("message", (msg) => {
        console.log("\u{1F4E9} Message received:", msg);
        socket.broadcast.emit("message", msg);
      });
      socket.on("disconnect", () => {
        console.log("\u{1F534} A user disconnected:", socket.id);
      });
    });
  }
  return io;
};
io = globalThis.ioGlobal ?? initSocketSingleton();
var io$1 = io;
if (process.env.NODE_ENV !== "production") globalThis.ioGlobal = io;

dotenv.config();
const port = parseInt(process.env.PORT || "3001", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const httpServer = node_http.createServer((req, res) => {
    const parsedUrl = node_url.parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port);
  io$1?.attach(httpServer);
  console.log(
    `> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV}`
  );
});
