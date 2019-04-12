'use strict';

const uploadPhotosUC = require('../../../domain/use-cases/admin/upload-photos-uc');

async function uploadPhotosC(req, res, next) {
  const pictures = { ...req.body };
  const { authorization } = req.headers;

  try {
    const { secureUrl, etag } = await uploadPhotosUC(pictures, authorization);
    res.header('Location', secureUrl);
    res.header('Etag', etag);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = uploadPhotosC;
