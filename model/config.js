import { Pool } from 'pg';

require('dotenv').config();

const conString = {
    user: 'postgres',
    host: '127.0.0.1',
    database: 'pmglobal',
    password: '1NIGeria',
    port: 5432,
}

const pool = new Pool(conString);

pool.on('connect', () => {
  console.log(`database connected successfully to ${process.env.NODE_ENV}`);
});

export default pool;