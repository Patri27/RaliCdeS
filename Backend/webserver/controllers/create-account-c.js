'use strict';

const createAccount = require('../../domain/use-cases/account/create-account-uc');

async function createAccountController(req, res, next) {
  const userDataProfile = { ...req.body };
  const { email, password } = userDataProfile;
  try {
    await createAccount(email, password);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = createAccountController;
