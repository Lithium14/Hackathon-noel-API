import { WorldRepository } from './../repository/world.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';

export class WorldService extends AbstractService {
    protected repository = getCustomRepository(WorldRepository);

    constructor() {
        super();
    }
}
