'use strict';

const express = require('express');
const createAccount = require('../../domain/use-cases/account/create-account-uc');

const accountRouter = express.Router();

accountRouter.post('/account', createAccount);

module.exports = accountRouter;
