'use strict';

const Joi = require('joi');
const {
  stringSchema, textSchema, uriNaSchema, arraySchema,
} = require('../../../models/validations-models');
const { checkAuthorization } = require('../session/check-authorization');
const { createNews } = require('../../repositories/admin-repository');

async function validate(payload) {
  const schema = {
    title: stringSchema,
    content: textSchema,
    category: stringSchema,
    archives: arraySchema.items(uriNaSchema),
  };

  return Joi.validate(payload, schema);
}

async function createNewsUC(newsContent, authorization) {
  /**
   * Check authorization header to get uuid
   */
  const { uuid } = await checkAuthorization(authorization);

  try {
    await validate(newsContent);
  } catch (error) {
    throw new Error(error);
  }

  const {
    title, content, category, archives: { ...url },
  } = newsContent;

  const data = {
    title,
    author: uuid,
    content,
    favourite: [],
    modified: null,
    deletedAt: null,
    archives: [url],
    category,
  };

  try {
    await createNews(data);
    return null;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = createNewsUC;
