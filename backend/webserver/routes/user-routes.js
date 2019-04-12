'use strict';

const express = require('express');
const updateUserProfile = require('../controllers/user/update-profile-c');
const createPost = require('../controllers/user/create-post-c');
const deletePost = require('../controllers/user/delete-post-c');
const updatePost = require('../controllers/user/update-post-c');

const userRouter = express.Router();

userRouter.put('/user', updateUserProfile);
userRouter.post('/user/post', createPost);
userRouter.delete('/user/post/delete', deletePost);
userRouter.put('/user/post/modify', updatePost);

module.exports = userRouter;
