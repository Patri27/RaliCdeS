'use strict';

const { getAboutUs } = require('../../repositories/shared-repository');

async function GetAboutUsUC() {
  try {
    const aboutUs = await getAboutUs();
    return aboutUs;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = GetAboutUsUC;
