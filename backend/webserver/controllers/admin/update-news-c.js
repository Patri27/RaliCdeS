'use strict';

const updateNewsUC = require('../../../domain/use-cases/admin/update-news-uc');

async function updateNews(req, res, next) {
  const { q: newsId } = req.query;
  const newsContent = { ...req.body };
  const { authorization } = req.headers;

  try {
    await updateNewsUC(newsId, newsContent, authorization);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = updateNews;
