const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const websocketServer = new WebSocket.Server({ server });

server.listen(3001, () => {
  console.log("WebSocket server started on port 3001");
});

let groupStatus = "PENDING_REGISTRATION";  // Initial group status

websocketServer.on('connection', (socket) => {
    console.log('Client connected.');

    // Send initial status to new client
    socket.send(JSON.stringify({ type: "groupStatusUpdate", data: groupStatus })); 

    socket.on('message', (data) => {
      const message = JSON.parse(data);
      console.log("Received message from user:", message);

      if (message.message.toLowerCase() === "update") {
        groupStatus = getNextStatus(groupStatus);
        console.log("Group status updated to:", groupStatus); 
        broadcastGroupUpdate(groupStatus);
      } else {
        // Broadcast regular chat messages
        websocketServer.clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
              client.send(data.toString());
            }
          });
      }
    });

    socket.on('close', () => {
      console.log('Client disconnected');
    });
});

function getNextStatus(currentStatus) {
  const statusOrder = [
    "PENDING_REGISTRATION",
    "PENDING_UPDATED",
    "PENDING_DELETION",
    "REGISTERED",
    "DELETED"
  ];
  const currentIndex = statusOrder.indexOf(currentStatus);
  return statusOrder[(currentIndex + 1) % statusOrder.length]; // Cycle through statuses
}

function broadcastGroupUpdate(newStatus) {
  const message = JSON.stringify({ type: "groupStatusUpdate", data: newStatus });
  websocketServer.clients.forEach(client => client.send(message));
}