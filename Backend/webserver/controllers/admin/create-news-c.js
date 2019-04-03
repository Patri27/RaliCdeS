'use strict';

const createNewsUC = require('../../../domain/use-cases/admin/create-news');

async function createNews(req, res, next) {
  const newsContent = { ...req.body };
  const { authorization } = req.headers;

  try {
    await createNewsUC(newsContent, authorization);
    return res.status(201).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = createNews;
