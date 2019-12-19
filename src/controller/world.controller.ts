import { WorldService } from './../services/world.service';
import { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class WorldController extends AbstractController {

  service = new WorldService();

  constructor(app: Application) {
      super('worlds', app);
  }
}
