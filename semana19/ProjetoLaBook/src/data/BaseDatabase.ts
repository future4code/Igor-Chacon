import knex from 'knex';
import Knex from 'knex';

export class BaseDatabase {

    protected connection = knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: 3306,
            multipleStatements: true
        }
    })
}
    