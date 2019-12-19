import { User } from './user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('score')
export class Score {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    text!: string;

    @Column()
    date!: Date;

    @ManyToOne(
        type => User,
        user => user.message)
        user!: User[];

}
