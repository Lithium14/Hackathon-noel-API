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

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function(req: Request, res: Response) {
  res.sendFile(__dirname + '/index.html');
});

async function startServer() {
    // Récupération de l'application initiale
    const app = express();
    const server = new Server(app);
    const socke = io(server);
    socke.onconnection((userSock: io.Server) => {
      console.log('Connextion detecté');

      userSock.emit('nes message');

      userSock.on('message', (data: any) => {
        console.log(data);

      });

    });

    // Chargement des différent loader
    await loaders(app);

    // Ajout des différentes route de votre application
    SportController(app);
    const userController = new UserController(app);
    const messageController = new MessageController(app);
    const scoreContrller = new ScoreController(app);
    const worldController = new WorldController(app);

    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server  is running'));
  }

startServer();

// server.listen(port, () => {
//   console.log(`started on port: ${port}`);
// });
