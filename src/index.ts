import { WorldController } from './controller/world.controller';
import { ScoreController } from './controller/score.controller';
import { MessageController } from './controller/message.controller';
import { UserController } from './controller/user.controller';
import express from 'express';
import { SportController } from './controller/sport.controller';
import 'reflect-metadata';
import loaders from './loaders';
import { Server } from 'http';
import io from 'socket.io';

async function startServer() {
  // Récupération de l'application initiale
  const app = require('express')();
  const server = require('http').Server(app);
  const io = require('socket.io')(server);

  // const server = http.createServer(app);

  const debug = require('debug')('angular2-nodejs:server');

    /**
     * Get port from environment and store in Express.
     */

    /**
     * Create HTTP server.
     */

  // const io = require('socket.io').listen(server);

  io.on('connection', (socket: any) => {

        console.log('new connection made.');

        socket.on('join', function(data: any) {
          // joining
          socket.join(data.room);

          console.log(data.user + 'joined the room : ' + data.room);

          socket.broadcast.to(data.room).emit('new user joined', {user: data.user, message: 'has joined this room.'});
        });

        socket.on('leave', function(data: any) {

          console.log(data.user + 'left the room : ' + data.room);

          socket.broadcast.to(data.room).emit('left room', {user: data.user, message: 'has left this room.'});

          socket.leave(data.room);
        });

        socket.on('message', function(data: any) {

          io.in(data.room).emit('new message', {user: data.user, message: data.message});
        });
    });

    /**
     * Listen on provided port, on all network interfaces.
     */

    /**
     * Normalize a port into a number, string, or false.
     */

  function normalizePort(val: any) {
      const port = parseInt(val, 10);

      if (isNaN(port)) {
        // named pipe
        return val;
      }

      if (port >= 0) {
        // port number
        return port;
      }

      return false;
    }

    /**
     * Event listener for HTTP server "error" event.
     */

  function onError(error: any) {
      if (error.syscall !== 'listen') {
        throw error;
      }

      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error('ÀÀ' + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error('SOSPOS' + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    }

    /**
     * Event listener for HTTP server "listening" event.
     */

  function onListening() {
      const addr: any = server.address();
      const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
      debug('Listening on ' + bind);
    }
    // Chargement des différent loader
  await loaders(app);

    // Ajout des différentes route de votre application
  SportController(app);
  const userController = new UserController(app);
  const messageController = new MessageController(app);
  const scoreContrller = new ScoreController(app);
  const worldController = new WorldController(app);

    // Démarrage du serveur une fois que tout est correctement init

  server.listen(1234);
  }

startServer();

