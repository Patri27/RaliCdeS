'use strict';

const { getGallery } = require('../../repositories/shared-repository');

async function GetGalleryUC() {
  try {
    const images = await getGallery();
    return images;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = GetGalleryUC;
