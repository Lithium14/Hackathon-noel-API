import { createConnection, Connection } from 'typeorm';
// Importer les entity créer

export default async () => {
    const connection: Connection = await createConnection({
        type: 'mysql',
        host: process.env.WILD_DB_NOEL_HOST,
        port: parseInt(process.env.WILD_DB_NOEL_PORT || '3306', 10) ,
        username: process.env.WILD_DB_NOEL_USER,
        password: process.env.WILD_DB_NOEL_PASSWORD,
        database: process.env.WILD_DB_NOEL_DATABASE,
        entities: [

        ],
        synchronize: true,
    });

    return connection;
};
