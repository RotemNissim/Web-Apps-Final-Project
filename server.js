const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const path = require('path'); // This is the key part you were missing

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// ... Your other middleware and routes setup ...

// Websocket connection handling
io.on('connection', (socket) => {
  console.log('New websocket connection:', socket.id);

  // Handle incoming websocket events here
  // For example, you can emit events to specific clients or broadcast to all connected clients.
});

app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//hello
