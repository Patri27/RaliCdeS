'use strict';

const { insertUserIntoMySQLDatabase } = require('../../repositories/account-repository');


async function createAccount(email, password) {
  try {
    await insertUserIntoMySQLDatabase(email, password);
  } catch (e) {
    return console.log(e.message);
  }
  return null;
}

module.exports = createAccount;
