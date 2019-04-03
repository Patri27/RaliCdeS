'use strict';

const Joi = require('joi');
const { uuidSchema } = require('../../../models/validations-models');
const { checkAuthorization } = require('../session/check-authorization');
const { removeNews } = require('../../repositories/admin-repository');

async function validate(payload) {
  const schema = {
    newsId: uuidSchema,
  };

  return Joi.validate(payload, schema);
}

async function removeNewsUC(postId, authorization) {
  try {
    await validate({ postId });
  } catch (e) {
    throw new Error();
  }

  try {
    await checkAuthorization(authorization);
  } catch (e) {
    throw new Error();
  }

  try {
    await removeNews(postId);
  } catch (e) {
    throw (e);
  }
}

module.exports = removeNewsUC;
