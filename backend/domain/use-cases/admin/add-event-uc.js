'use strict';

const Joi = require('joi');
const {
  stringSchema, textSchema, dateSchema,
} = require('../../../models/validations-models');
const checkAuthorization = require('../session/check-authorization');
const { addEvent } = require('../../repositories/admin-repository');

async function validate(payload) {
  const schema = {
    name: stringSchema,
    description: textSchema,
    date: dateSchema,
    location: stringSchema,
  };

  return Joi.validate(payload, schema);
}

async function addEventUC(eventContent, authorization) {
  /**
   * Check authorization header to get uuid
   */
  await checkAuthorization(authorization);

  try {
    await validate(eventContent);
  } catch (error) {
    throw new Error(error);
  }

  try {
    await addEvent(eventContent);
    return null;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = addEventUC;
