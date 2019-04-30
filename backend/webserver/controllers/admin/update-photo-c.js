'use strict';

const updatePhotoUC = require('../../../domain/use-cases/admin/update-photo-uc');

async function updatePhoto(req, res, next) {
  const { secureUrl: imageLink } = req.body;
  const { title, description } = req.body;
  const imageContent = {
    title,
    description,
  };
  const { authorization } = req.headers;

  try {
    await updatePhotoUC(imageLink, imageContent, authorization);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = updatePhoto;
