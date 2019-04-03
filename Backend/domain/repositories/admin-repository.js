'use strict';

const NewsModel = require('../../models/news-model');

/**
 *  Create News
 * @param {Object} data
 * @returns null
 */
async function createNews(data) {
  await NewsModel.create(data);

  return null;
}

module.exports = {
  createNews,
};
