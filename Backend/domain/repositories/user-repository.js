'use strict';

const mysqlPool = require('../../databases/mysql-pool');

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

async function isVerified(email) {
  const connection = await mysqlPool.getConnection();
  const sqlQuery = `SELECT
      email, activated_at
      FROM users
      WHERE email = '${email}'`;

  const [result] = await connection.query(sqlQuery);
  return result[0].activated_at ? email : new Error();
}


module.exports = {
  checkIfUserExists,
  isVerified,
};
