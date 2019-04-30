'use strict';

const Joi = require('joi');
const checkAuthorization = require('../session/check-authorization');
const { updateAboutUs } = require('../../repositories/admin-repository');
const { stringSchema, textSchema } = require('../../../models/validations-models');

async function validate(payload) {
  const schema = {
    title: stringSchema,
    content: textSchema,
  };

  return Joi.validate(payload, schema);
}


async function updateAboutUsUC(aboutUsContent, authorization) {
  /**
   * Check authorization header to get uuid
   */
  const { uuid } = await checkAuthorization(authorization);

  await validate(aboutUsContent);

  try {
    await updateAboutUs(aboutUsContent, uuid);
  } catch (e) {
    throw new Error(e.message);
  }
}

module.exports = updateAboutUsUC;
