import { UserRepository } from './../repository/user.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';

export class UserService extends AbstractService {
    protected repository = getCustomRepository(UserRepository);

    constructor() {
        super();
    }

}
