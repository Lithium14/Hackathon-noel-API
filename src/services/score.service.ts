import { ScoreRepository } from './../repository/score.repository';
import { getCustomRepository } from 'typeorm';
import { AbstractService } from '../core/abstract.service';

export class ScoreService extends AbstractService {
    protected repository = getCustomRepository(ScoreRepository);
}
