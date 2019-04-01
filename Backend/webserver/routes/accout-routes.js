'use strict';

const express = require('express');
const createAccount = require('../controllers/create-account-c');

const accountRouter = express.Router();

accountRouter.post('/account', createAccount);

module.exports = accountRouter;
