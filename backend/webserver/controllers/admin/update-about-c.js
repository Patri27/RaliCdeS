'use strict';

const updateNewsUC = require('../../../domain/use-cases/admin/update-about-uc');

async function updateNews(req, res, next) {
  const newsContent = { ...req.body };
  const { authorization } = req.headers;

  try {
    await updateNewsUC(newsContent, authorization);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = updateNews;
