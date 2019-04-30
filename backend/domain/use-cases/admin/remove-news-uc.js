'use strict';

const Joi = require('joi');
const { objectIdSchema } = require('../../../models/validations-models');
const checkAuthorization = require('../session/check-authorization');
const { removeNews } = require('../../repositories/admin-repository');

async function validate(payload) {
  const schema = {
    newsId: objectIdSchema,
  };

  return Joi.validate(payload, schema);
}

async function removeNewsUC(newsId, authorization) {
  try {
    await validate({ newsId });
  } catch (e) {
    throw new Error();
  }


  await checkAuthorization(authorization);


  try {
    await removeNews(newsId);
  } catch (e) {
    throw (e);
  }
}

module.exports = removeNewsUC;
