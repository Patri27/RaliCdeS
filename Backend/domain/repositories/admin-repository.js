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

async function removeNews(newsId) {
  await NewsModel.findOneAndDelete({ id: newsId });
}

async function updateNews(filter, operation) {
  await NewsModel.updateOne(filter, operation);
}

module.exports = {
  createNews,
  removeNews,
  updateNews,
};
