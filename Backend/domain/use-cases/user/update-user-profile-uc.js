'use strict';

const Joi = require('joi');

const { updateUserProfile } = require('../../repositories/user-repository');
const { checkAuthorization } = require('../session/check-authorization');
const { stringSchema, textSchema } = require('../../../models/validations-models');

async function validate(payload) {
  const schema = {
    fullName: stringSchema,
    location: stringSchema,
    description: textSchema,
  };

  return Joi.validate(payload, schema);
}

async function updateUserProfileUC(userData, authorization) {
  /**
   * Check authorization header to get uuid
   */
  const { uuid } = await checkAuthorization(authorization);

  /**
   * validate data
   */
  await validate(userData);

  try {
    await updateUserProfile(uuid, userData);
  } catch (err) {
    throw err;
  }
}


module.exports = updateUserProfileUC;
