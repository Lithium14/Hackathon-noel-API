import { User } from './user.entity';
import { World } from './world.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('score')
export class Score {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    score!: number;

    @ManyToOne(
        type => User,
        user => user.scores)
        user!: User[];

    @ManyToOne(
        type => World,
        world => world.scores)
        world!: World[];
}
