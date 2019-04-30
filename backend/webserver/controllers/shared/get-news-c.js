'use strict';

const getNewsUC = require('../../../domain/use-cases/shared/get-news-uc');

async function getNews(req, res, next) {
  try {
    const news = await getNewsUC();
    return res.status(200).send(news);
  } catch (e) {
    return next(e);
  }
}

module.exports = getNews;
