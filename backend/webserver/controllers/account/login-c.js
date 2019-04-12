'use strict';

const loginUC = require('../../../domain/use-cases/account/login-uc');

async function loginController(req, res, next) {
  const { email, password } = { ...req.body };

  try {
    const message = await loginUC(email, password);
    return res.status(200).send(message);
  } catch (e) {
    return next(e);
  }
}

module.exports = loginController;
