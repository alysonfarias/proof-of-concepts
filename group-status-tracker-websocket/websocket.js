const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const websocketServer = new WebSocket.Server({ server });

server.listen(3001, () => {
  console.log("WebSocket server started on port 3001");
});

websocketServer.on('connection', (socket) => {
    console.log('Client connected.');

    socket.on('message', (data) => {
      const message = JSON.parse(data);

      console.log("Received message from user:", message); // Log received data

      websocketServer.clients.forEach((client) => {
        if (client !== socket && client.readyState === WebSocket.OPEN) {
          client.send(data.toString());
        }
      });
    });

    socket.on('close', () => {
      console.log('Client disconnected');
    });
});