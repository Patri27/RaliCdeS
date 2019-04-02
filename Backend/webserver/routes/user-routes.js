'use strict';

const express = require('express');
const updateUserProfile = require('../controllers/update-profile-c');

const userRouter = express.Router();

userRouter.put('/user', updateUserProfile);

module.exports = userRouter;
