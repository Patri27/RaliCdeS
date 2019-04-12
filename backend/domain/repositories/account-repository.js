'use strict';

const mysqlPool = require('../../databases/mysql-pool');
const UserModel = require('../../models/user-model');

// Create account functions
/**
 * Insert user into mongodb
 * @param {String} email
 * @param {String} securePassword
 * @param {String} uuid
 * @param {Date} createdAt
 * @returns null
 */

async function insertUserIntoMySQLDatabase(email, securePassword, uuid, createdAt) {
  const connection = await mysqlPool.getConnection();

  await connection.query('INSERT INTO users SET ?', {
    uuid,
    email,
    password: securePassword,
    created_at: createdAt,
  });
  return null;
}

/**
 * Insert user into mongodb
 * @param {String} uuid
 * @returns {String} uuid
 */
async function createUserInMongoDB(uuid, userProfileData) {
  await UserModel.create(userProfileData);
  return null;
}

// Login functions
/**
 * @param {String} email
 * @returns {Object} result[0] --> User data
 */
async function checkIfUserExists(email) {
  const connection = await mysqlPool.getConnection();
  const sqlQuery = `SELECT
      uuid, email, password, activated
      FROM users
      WHERE email = '${email}'`;

  const [result] = await connection.query(sqlQuery);
  return result.length ? result[0] : new Error();
}

module.exports = {
  insertUserIntoMySQLDatabase,
  createUserInMongoDB,
  checkIfUserExists,
};
