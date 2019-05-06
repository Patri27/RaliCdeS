'use strict';

const verifyAccountUC = require('../../../domain/use-cases/account/verify-account-uc');

async function verifyAccount(req, res, next) {
  const { verification_code: verificationCode } = req.query;

  try {
    await verifyAccountUC(verificationCode);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = verifyAccount;
