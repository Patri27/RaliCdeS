'use strict';

const loginUC = require('../../../domain/use-cases/account/login-uc');

async function loginController(req, res, next) {
  const { email, password } = { ...req.body };

  try {
    await loginUC(email, password);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = loginController;
