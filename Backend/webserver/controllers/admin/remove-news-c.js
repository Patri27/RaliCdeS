'use strict';

const removeNewsUC = require('../../../domain/use-cases/admin/remove-news-uc');

async function removeNews(req, res, next) {
  const newsId = req.query;
  const { authorization } = req.headers;

  try {
    await removeNewsUC(newsId, authorization);
    return res.status(201).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = removeNews;
