'use strict';

const bcrypt = require('bcrypt');
const uuidV4 = require('uuid/v4');
const mysqlPool = require('../../databases/mysql-pool');
const mongoPool = require('../../databases/mongo-pool');
/**
 * Insert the user into the database generating an uuid and calculating the bcrypt password
 * @param {String} email
 * @param {String} password
 * @return {String} uuid
 */
async function insertUserIntoMySQLDatabase(email, password) {
  const securePassword = await bcrypt.hash(password, 10);
  const uuid = uuidV4();
  const now = new Date();
  const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');

  console.log('secure password', securePassword);
  console.log('createdAt', createdAt);
  console.log('uuid', uuid);

  const connection = await mysqlPool.getConnection();

  await connection.query('INSERT INTO users SET ?', {
    uuid,
    email,
    password: securePassword,
    created_at: createdAt,
  });
  return uuid;
}

async function checkIfUserExists(email) {
  const connection = await mysqlPool.getConnection();
  const sqlQuery = `SELECT
    id, uuid, email, password, activated_at
    FROM users
    WHERE email = '${email}'`;

  // const result = connecgtion.query(sqlQuery)[0]
  const [result] = await connection.query(sqlQuery);
  if (result.length === 1) {
    const userData = result[0];
    if (userData.activated_at) { return null; }
  }
  return null;
}

module.exports = {
  insertUserIntoMySQLDatabase,
  checkIfUserExists,
};
