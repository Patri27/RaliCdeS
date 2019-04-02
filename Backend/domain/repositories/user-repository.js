'use strict';

const dot = require('dot-object');
const mysqlPool = require('../../databases/mysql-pool');
const UserModel = require('../../models/user-model');

// Login functions
/**
 * @param {String} email
 * @returns {String} email
 */
async function checkIfUserExists(email) {
  const connection = await mysqlPool.getConnection();
  const sqlQuery = `SELECT
      id, uuid, email, password, activated_at
      FROM users
      WHERE email = '${email}'`;

  const [result] = await connection.query(sqlQuery);
  return result.length === 1 ? email : new Error();
}

/**
 * @param {String} email
 * @returns {String} email
 */
async function isVerified(email) {
  const connection = await mysqlPool.getConnection();
  const sqlQuery = `SELECT
      email, activated_at
      FROM users
      WHERE email = '${email}'`;

  const [result] = await connection.query(sqlQuery);
  return result[0].activated_at ? email : new Error();
}

// Update user profile
/**
 * @param {String} uuid
 * @param {Object} userData data to be updated
 * @return {Object} null if everything is ok
 */
async function updateUserProfile(uuid, userData) {
  const userDataProfileMongoose = dot.dot(userData);
  await UserModel.updateOne({ uuid }, userDataProfileMongoose);

  return null;
}

module.exports = {
  checkIfUserExists,
  isVerified,
  updateUserProfile,
};
