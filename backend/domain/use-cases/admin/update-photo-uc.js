'use strict';

const Joi = require('joi');
const {
  stringSchema, textSchema,
} = require('../../../models/validations-models');
const checkAuthorization = require('../session/check-authorization');
const { updatePhoto } = require('../../repositories/admin-repository');

async function validate(payload) {
  const schema = {
    title: stringSchema,
    description: textSchema,
  };

  return Joi.validate(payload, schema);
}

async function updatePhotoUC(imageUrl, imageContent, authorization) {
  /**
   * Check authorization header to get uuid
   */
  await checkAuthorization(authorization);

  try {
    await validate(imageContent);
  } catch (error) {
    throw new Error(error);
  }

  try {
    await updatePhoto(imageContent, imageUrl);
    return null;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = updatePhotoUC;
