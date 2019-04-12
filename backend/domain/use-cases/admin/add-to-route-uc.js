'use strict';

const Joi = require('joi');
const {
  stringSchema, textSchema, arraySchema, numberSchema,
} = require('../../../models/validations-models');
const checkAuthorization = require('../session/check-authorization');
const { addSponsor, addToRoute } = require('../../repositories/admin-repository');

async function validate(payload) {
  const schema = {
    name: stringSchema,
    about: textSchema,
    location: stringSchema,
    inRoutes: arraySchema.items(stringSchema),
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

  await validate(sponsor);

  try {
    await addSponsor(sponsor);
    await addToRoute(sponsor);
  } catch (e) {
    throw new Error(e);
  }
  return null;
}

module.exports = addToRouteUC;
