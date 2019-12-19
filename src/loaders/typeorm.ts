import { Score } from './../models/entity/score.entity';
import { World } from './../models/entity/world.entity';
import { Message } from './../models/entity/message.entity';
import { User } from './../models/entity/user.entity';
import { createConnection, Connection } from 'typeorm';

export default async () => {
    const connection: Connection = await createConnection({
        type: 'mysql',
        host: process.env.WILD_DB_NOEL_HOST,
        port: parseInt(process.env.WILD_DB_NOEL_PORT || '3306', 10) ,
        username: process.env.WILD_DB_NOEL_USER,
        password: process.env.WILD_DB_NOEL_PASSWORD,
        database: process.env.WILD_DB_NOEL_DATABASE,
        entities: [
            User,
            Message,
            World,
            Score,

        ],
        synchronize: true,
    });

    return connection;
};
