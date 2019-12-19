import { MessageService } from './../services/message.service';
import { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class MessageController extends AbstractController {

  service = new MessageService();

  constructor(app: Application) {
      super('messages', app);
  }
}
