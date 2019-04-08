'use strict';

const updatePostUC = require('../../../domain/use-cases/admin/update-news-uc');

async function updatePostC(req, res, next) {
  const postId = req.query;
  const postContent = { ...req.body };
  const { authorization } = req.headers;

  try {
    await updatePostUC(postId, postContent, authorization);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = updatePostC;
