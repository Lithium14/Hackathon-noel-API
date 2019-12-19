import { UserService } from './../services/user.service';
import { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class UserController extends AbstractController {

  service = new UserService();
  route = 'user';

  constructor(app: Application) {
      super(app);
  }
}
