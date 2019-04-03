'use strict';

const createPostUC = require('../../../domain/use-cases/user/create-post-uc');

async function createPost(req, res, next) {
  const postContent = { ...req.body };
  const { authorization } = req.headers;

  try {
    await createPostUC(postContent, authorization);
    return res.status(201).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = createPost;
