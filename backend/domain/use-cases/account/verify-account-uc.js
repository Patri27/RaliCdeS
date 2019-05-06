'use strict';

const { ValidationError, ConflictError } = require('../../../webserver/errors/index');
const { verifyAccount } = require('../../repositories/account-repository');

async function verifyAccountUC(verificationCode) {
  if (!verificationCode) {
    throw new ValidationError();
  }

  try {
    await verifyAccount(verificationCode);
  } catch (e) {
    throw new ConflictError(e);
  }
  return null;
}

module.exports = verifyAccountUC;
