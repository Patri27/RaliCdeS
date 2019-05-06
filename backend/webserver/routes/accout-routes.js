'use strict';

const express = require('express');

const createAccountC = require('../controllers/account/create-account-c');
const loginC = require('../controllers/account/login-c');
const verifyAccountC = require('../controllers/account/verify-account-c');

const accountRouter = express.Router();

accountRouter.post('/account', createAccountC);
accountRouter.post('/account/login', loginC);
accountRouter.get('/account/activate', verifyAccountC);

module.exports = accountRouter;
