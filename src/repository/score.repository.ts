import { Score } from './../models/entity/score.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Score)
export class ScoreRepository extends Repository<Score> {

}
