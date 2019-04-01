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

  try {
    const connection = await mysqlPool.getConnection();

    await connection.query('INSERT INTO users SET ?', {
      uuid,
      email,
      password: securePassword,
      created_at: createdAt,
    });
  } catch (e) {
    return new Error(e.message);
  }
  return uuid;
}

module.exports = {
  insertUserIntoMySQLDatabase,
};
