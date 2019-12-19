import { ScoreService } from './../services/score.service';
import { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class ScoreController extends AbstractController {

  service = new ScoreService();
  route = 'score';

  constructor(app: Application) {
      super(app);
  }
}
