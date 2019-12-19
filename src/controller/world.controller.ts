import { WorldService } from './../services/world.service';
import { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class WorldController extends AbstractController {

  service = new WorldService();
  route = 'world';

  constructor(app: Application) {
      super(app);
  }
}
