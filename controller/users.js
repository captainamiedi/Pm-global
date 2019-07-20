import db from '../model/config';
import {responseMsg} from '../utils/helpers';


export const create_user = async (req, res) => {
  const createQuery = 'INSERT INTO users (firstname, lastname, gender, date_of_birth, date_created, date_updated) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const value = [
    req.body.firstname,
    req.body.lastname,
    req.body.gender,
    req.body.date_of_birth,
    new Date(),
    new Date(),
  ]

  try {
    const result = await db.query(createQuery, value);
    console.log(result.rows);
    return responseMsg(res, 201, 'successful', result.rows);
  } catch (error) {
    console.log(error, 'ooooooooo');
    res.status(400).json(error);
  }
};

export const getUser = async (req, res) => {
  const query = 'SELECT * FROM users WHERE firstname = $1 ORDER BY date_created DESC LIMIT 10'

  try {
    const result = await db.query(query, [req.query.firstname]);
    console.log(result.rows);
    return responseMsg(res, 200, 'successful', result.rows);
  } catch (error) {
    console.log(error, 'olllllll');
    res.status(400).json(error);
  }
};

export const getSpecificUser = async (req, res) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const value = [req.params.id];

  try {
    const result = await db.query(query, value);
    console.log(result.rows);
    return responseMsg(res, 200, 'successful', result.rows);
  } catch (error) {
    console.log(error, 'yyyyyyy');
    res.status(400).json(error);
  }
};

export const updateUser = async (req, res) => {
  const query = 'UPDATE users SET lastname = $1, firstname = $2, date_of_birth = $3, date_updated = $4 WHERE id = $5 RETURNING *';
  const value = [
    req.body.firstname,
    req.body.lastname,
    req.body.date_of_birth,
    // req.body.gender,
    new Date(),
    req.params.id]

  try {
    const result = await db.query(query, value);
    console.log(result);
    return responseMsg(res, 200, 'successful', result.rows);
  } catch (error) {
    console.log(error, 'nowwwwwwww');
    res.status(400).json(error);
  }
};

export const deleteUser = async (req, res) => {
  const query = 'DELETE FROM users WHERE id = $1';
  const value = [req.params.id];

  try {
    const result = await db.query(query, value);
    return responseMsg(res, 200, 'successful', 'users successfully deleted');
  } catch (error) {
    console.log(error, 'hhhhhhh');
    return res.status(400).json(error);
  }
};