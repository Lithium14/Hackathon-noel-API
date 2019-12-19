import { User } from './user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('message')
export class Message {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @Column()
    date!: Date;

    @ManyToOne(
        type => User,
        user => user.message)
        user!: User[];

}
