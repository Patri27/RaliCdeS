'use strict';

const Joi = require('joi');
const { stringSchema, textSchema } = require('../../../models/validations-models');
const { checkAuthorization } = require('../../use-cases/session/check-authorization');
const { createPost, insertIntoPostCollection } = require('../../repositories/user-repository');

async function validate(payload) {
  const schema = {
    title: stringSchema,
    content: textSchema,
  };

  return Joi.validate(payload, schema);
}

async function createPostUC(postContent, authorization) {
  /**
   * Check authorization header to get uuid
   */
  const { uuid } = await checkAuthorization(authorization);

  await validate(postContent);
  const { title, content } = postContent;

  const data = {
    title,
    author: uuid,
    content,
    favourite: [],
    comments: [],
    deletedAt: null,
  };

  // createPost returns post_id
  const postId = await createPost(data);

  // insert post into user's post collection
  const filter = {
    uuid,
  };
  const operation = {
    $addToSet: {
      posts: postId,
    },
  };

  const options = {
    upsert: true,
  };

  await insertIntoPostCollection(filter, operation, options);
}

module.exports = createPostUC;
