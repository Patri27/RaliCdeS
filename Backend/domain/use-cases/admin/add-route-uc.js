'use strict';

const Joi = require('joi');
const { stringSchema } = require('../../../models/validations-models');
const checkAuthorization = require('../session/check-authorization');
const { addEvent } = require('../../repositories/admin-repository');

async function validate(payload) {
  const schema = {
    start: stringSchema,
    length: stringSchema,
  };

  return Joi.validate(payload, schema);
}

async function addRouteUC(routeContent, authorization) {
  /**
   * Check authorization header to get uuid
   */
  await checkAuthorization(authorization);

  try {
    await validate(routeContent);
  } catch (error) {
    throw new Error(error);
  }

  try {
    await addEvent(routeContent);
    return null;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = addRouteUC;
