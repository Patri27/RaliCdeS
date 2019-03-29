'use strict';

const { insertUserIntoMySQLDatabase } = require('../../repositories/account-repository');

async function createAccount(email, password) {
  try {
    await insertUserIntoMySQLDatabase(email, password);
  } catch (e) {
    return e;
  }
  return null;
}

module.exports = createAccount;
