'use strict';

const updateAboutUsUC = require('../../../domain/use-cases/admin/update-about-us-uc');

async function updateAboutUsC(req, res, next) {
  const aboutUsContent = { ...req.body };
  const { authorization } = req.headers;

  try {
    await updateAboutUsUC(aboutUsContent, authorization);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = updateAboutUsC;
