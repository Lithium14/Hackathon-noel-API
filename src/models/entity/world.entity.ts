import { Score } from './score.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('world')
export class World {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    world!: string;

    @OneToMany(
        type => Score,
        score => score.world,
    )
        scores!: Score[];
}
