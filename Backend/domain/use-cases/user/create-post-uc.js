'use strict';

const Joi = require('joi');
const { stringSchema, textSchema } = require('../../../models/validations-models');
const { checkAuthorization } = require('../../use-cases/session/check-authorization');

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

}

module.exports = createPostUC;