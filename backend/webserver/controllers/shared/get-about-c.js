'use strict';

const getAboutUC = require('../../../domain/use-cases/shared/get-about-uc');

async function getAbout(req, res, next) {
  try {
    const about = await getAboutUC();
    return res.status(200).send(about);
  } catch (e) {
    return next(e);
  }
}

module.exports = getAbout;
