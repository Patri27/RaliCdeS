'use strict';

const bcrypt = require('bcrypt');
const uuidV4 = require('uuid/v4');
const mysqlPool = require('../../databases/mysql-pool');

// Create account functions
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

// Login functions
/**
 * @param {String} uuid
 * @returns {Object} sqlQuery[0](User Data)
 */
async function checkIfUserExists(uuid) {
  const connection = await mysqlPool.getConnection();
  const sqlQuery = `SELECT
    id, uuid, email, password, activated_at
    FROM users
    WHERE uuid = '${uuid}'`;

  const [result] = await connection.query(sqlQuery);
  if (result.length === 1 && result[0].activated_at) {
    return result[0];
  }
  console.log(sqlQuery[0]);
  return sqlQuery[0];
}

module.exports = {
  insertUserIntoMySQLDatabase,
  checkIfUserExists,
};
