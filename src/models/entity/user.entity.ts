import { Score } from './score.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;

    @Column()
    pseudo!: string;

    @Column()
    password!: string;

    @OneToMany(
        type => Score,
        score => score.user)
        score!: Score[];

    @OneToMany(
        type => Message,
        message => message.user)
        message!: Message[];

}
