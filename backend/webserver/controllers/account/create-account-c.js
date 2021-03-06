'use strict';

const createAccountUC = require('../../../domain/use-cases/account/create-account-uc');

async function createAccountController(req, res, next) {
  const { fullName, email, password } = { ...req.body };

  try {
    await createAccountUC(fullName, email, password);
  } catch (e) {
    return next(e);
  }
  return res.status(204).send();
}

module.exports = createAccountController;
