DROP DATABASE IF EXISTS pmglobal;
CREATE DATABASE pmglobal;

\c pmglobal;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    gender VARCHAR NOT NULL,
    date_of_birth VARCHAR NOT NULL,
    date_created TIMESTAMP,
    date_updated TIMESTAMP
);