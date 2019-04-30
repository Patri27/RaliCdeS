'use strict';

const { getNews } = require('../../repositories/shared-repository');

async function GetNewsUC() {
  try {
    const news = await getNews();
    return news;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = GetNewsUC;
