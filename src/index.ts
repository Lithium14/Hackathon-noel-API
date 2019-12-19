import { WorldController } from './controller/world.controller';
import { ScoreController } from './controller/score.controller';
import { MessageController } from './controller/message.controller';
import { UserController } from './controller/user.controller';
import express from 'express';
import { SportController } from './controller/sport.controller';
import 'reflect-metadata';
import loaders from './loaders';

async function startServer() {
    // Récupération de l'application initiale
    const app = express();

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
