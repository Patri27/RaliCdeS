'use strict';

const getAboutUsUC = require('../../../domain/use-cases/shared/get-about-us-uc');

async function getAboutUs(req, res, next) {
  try {
    const aboutUs = await getAboutUsUC();
    return res.status(200).send(aboutUs);
  } catch (e) {
    return next(e);
  }
}

module.exports = getAboutUs;
