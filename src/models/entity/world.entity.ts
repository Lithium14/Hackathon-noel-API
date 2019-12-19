import { World } from './world.entity';
import { Score } from './message.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('world')
export class World {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    world!: number;

    @OneToMany(
        type => Score,
        score => score.worlds,
    )
        scores!: Score[];
}
