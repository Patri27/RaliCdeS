'use strict';

const Joi = require('joi');
const {
  stringSchema, textSchema, uriNaSchema, arraySchema,
} = require('../../../models/validations-models');
const checkAuthorization = require('../session/check-authorization');
const { updatePost } = require('../../repositories/user-repository');

async function validate(payload) {
  const schema = {
    title: stringSchema,
    content: textSchema,
    category: stringSchema,
    archives: arraySchema.items(uriNaSchema),
  };

  return Joi.validate(payload, schema);
}

async function updatePostUC(postId, postContent, authorization) {
  /**
   * Check authorization header to get uuid
   */
  await checkAuthorization(authorization);

  try {
    await validate(postContent);
  } catch (error) {
    throw new Error(error);
  }

  const {
    title, content,
  } = postContent;

  const operation = {
    $set: {
      title,
      content,
      modified: true,
    },
  };

  try {
    await updatePost({ _id: postId }, operation);
    return null;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = updatePostUC;
