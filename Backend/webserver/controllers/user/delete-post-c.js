'use strict';

const deletePostUC = require('../../../domain/use-cases/user/delete-post-uc');

async function deletePostC(req, res, next) {
  const postId = req.query;
  const { authorization } = req.headers;

  try {
    await deletePostUC(postId, authorization);
    return res.status(200).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = deletePostC;
