'use strict';

const uploadPhotoUC = require('../../../domain/use-cases/admin/upload-photo-uc');

async function uploadPhotoC(req, res, next) {
  const { file } = req;
  const { authorization } = req.headers;

  try {
    const secureUrl = await uploadPhotoUC(file, authorization);
    res.header('Location', secureUrl);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = uploadPhotoC;
