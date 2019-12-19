import { MessageRepository } from './../repository/message.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';

export class MessageService extends AbstractService {
    protected repository = getCustomRepository(MessageRepository);

    constructor() {
        super();
    }
}
