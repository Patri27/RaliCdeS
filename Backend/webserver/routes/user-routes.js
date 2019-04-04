'use strict';

const express = require('express');
const updateUserProfile = require('../controllers/user/update-profile-c');
const createPost = require('../controllers/user/create-post-c');

const userRouter = express.Router();

userRouter.put('/user', updateUserProfile);
userRouter.post('/user/post', createPost);

module.exports = userRouter;
