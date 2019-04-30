'use strict';

const Joi = require('joi');
const checkAuthorization = require('../session/check-authorization');
const { updateAbout } = require('../../repositories/admin-repository');
const { stringSchema, textSchema } = require('../../../models/validations-models');

async function validate(payload) {
  const schema = {
    title: stringSchema,
    content: textSchema,
  };

  return Joi.validate(payload, schema);
}


async function updateAboutUC(aboutContent, authorization) {
  /**
   * Check authorization header to get uuid
   */
  const { uuid } = await checkAuthorization(authorization);

  await validate(aboutContent);

  try {
    await updateAbout(aboutContent, uuid);
  } catch (e) {
    throw new Error(e.message);
  }
}

module.exports = updateAboutUC;
