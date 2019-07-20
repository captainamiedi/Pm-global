import { Pool } from 'pg';

require('dotenv').config();

let conString;

const devConString = {
    user: 'postgres',
    host: '127.0.0.1',
    database: 'pmglobal',
    password: '1NIGeria',
    port: 5432,
}

if (process.env.NODE_ENV === 'production') {
  conString = { connectionString: process.env.DATABASE_URL, ssl: true };
} else {
  conString = devConString;
}

const pool = new Pool(conString);

pool.on('connect', () => {
  console.log(`database connected successfully to ${process.env.NODE_ENV}`);
});

export default pool;