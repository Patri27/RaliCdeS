'use strict';

const Joi = require('joi');
const {
  stringSchema, textSchema, uriNaSchema, arraySchema,
} = require('../../../models/validations-models');
const checkAuthorization = require('../session/check-authorization');
const { updateNews } = require('../../repositories/admin-repository');

async function validate(payload) {
  const schema = {
    title: stringSchema,
    content: textSchema,
    category: stringSchema,
    archives: arraySchema.items(uriNaSchema),
  };

  return Joi.validate(payload, schema);
}

async function updateNewsUC(newsId, newsContent, authorization) {
  /**
   * Check authorization header to get uuid
   */
  await checkAuthorization(authorization);

  try {
    await validate(newsContent);
  } catch (error) {
    throw new Error(error);
  }

  try {
    await updateNews(newsContent, newsId);
    return null;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = updateNewsUC;
