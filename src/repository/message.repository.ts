message;
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {

}
