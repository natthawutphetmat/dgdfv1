const express = require('express');
const next = require('next');
const http = require('http');
const socketIo = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Add this line to trust proxy
  server.set('trust proxy', true);

  const httpServer = http.createServer(server);
  const io = socketIo(httpServer);

  let onlineUsers = 0;
  let userIPs = {};

  io.on('connection', (socket) => {
    onlineUsers++;
    const ip = socket.handshake.headers['x-forwarded-for'] || socket.request.connection.remoteAddress;
    userIPs[socket.id] = ip;

    io.emit('updateUserCount', { onlineUsers, userIPs });

    socket.on('disconnect', () => {
      onlineUsers--;
      delete userIPs[socket.id];
      io.emit('updateUserCount', { onlineUsers, userIPs });
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  httpServer.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
