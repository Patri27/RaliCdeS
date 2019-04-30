'use strict';

const getGalleryUC = require('../../../domain/use-cases/shared/get-gallery-uc');

async function getGallery(req, res, next) {
  try {
    const images = await getGalleryUC();
    return res.status(200).send(images);
  } catch (e) {
    return next(e);
  }
}

module.exports = getGallery;
