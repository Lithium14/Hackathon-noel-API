import { World } from './../models/entity/world.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(World)
export class WorldRepository extends Repository<World> {

}
