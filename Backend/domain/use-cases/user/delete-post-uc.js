'use strict';

const Joi = require('joi');
const { uuidSchema } = require('../../../models/validations-models');
const checkAuthorization = require('../session/check-authorization');
const { deletePost } = require('../../repositories/user-repository');

async function validate(payload) {
  const schema = {
    newsId: uuidSchema,
  };

  return Joi.validate(payload, schema);
}

async function deletePostUC(postId, authorization) {
  try {
    await validate({ postId });
  } catch (e) {
    throw new Error();
  }


  await checkAuthorization(authorization);


  try {
    await deletePost(postId);
  } catch (e) {
    throw (e);
  }
}

module.exports = deletePostUC;
