'use strict';

const createAccountUC = require('../../../domain/use-cases/account/create-account-uc');

async function createAccountController(req, res, next) {
  const { email, password } = { ...req.body };

  try {
    await createAccountUC(email, password);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = createAccountController;
