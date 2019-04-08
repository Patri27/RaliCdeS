'use strict';

const Joi = require('joi');
const {
  stringSchema, textSchema, arraySchema, numberSchema,
} = require('../../../models/validations-models');
const checkAuthorization = require('../session/check-authorization');

async function validate(payload) {
  const schema = {
    name: stringSchema,
    about: textSchema,
    location: stringSchema,
    inRoute: arraySchema.items(stringSchema),
    description: textSchema,
    coordinates: arraySchema.ordered([
      numberSchema.min(0).max(90),
      numberSchema.min(-180).max(180),
    ]),
  };

  return Joi.validate(payload, schema);
}

async function addToRouteUC(sponsor, authorization) {
  await checkAuthorization(authorization);

  try {
    await validate(sponsor);
  } catch (error) {
    throw new Error(error.message);
  }

  try {
    // add sponsor
    // add to route
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = addToRouteUC;
