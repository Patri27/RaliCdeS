'use strict';

const uploadPhotoUC = require('../../../domain/use-cases/admin/upload-photo-uc');

async function uploadPhotoC(req, res, next) {
  const { file } = req;
  const { authorization } = req.headers;

  try {
    const etag = await uploadPhotoUC(file, authorization);
    // res.header('Location', secureUrl);
    res.header('Etag', etag);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = uploadPhotoC;
