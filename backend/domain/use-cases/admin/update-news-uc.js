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

  const {
    title, content, category, archives: { ...url },
  } = newsContent;

  const operation = {
    $set: {
      title,
      content,
      lastModifiedAt: Date.now(),
      archives: [url],
      category,
    },
  };

  try {
    await updateNews({ _id: newsId }, operation);
    return null;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = updateNewsUC;
