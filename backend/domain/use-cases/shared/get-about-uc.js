'use strict';

const { getAbout } = require('../../repositories/shared-repository');

async function GetAboutUC() {
  try {
    const about = await getAbout();
    return about;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = GetAboutUC;
