'use strict';

const express = require('express');
const createAccount = require('../controllers/account/create-account-c');
const login = require('../../domain/use-cases/account/login-uc');

const accountRouter = express.Router();

accountRouter.post('/account', createAccount);
accountRouter.post('/account/login', login);

module.exports = accountRouter;
