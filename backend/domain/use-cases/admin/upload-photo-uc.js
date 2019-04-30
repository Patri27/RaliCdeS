'use strict';

const cloudinary = require('cloudinary');
const checkAuthorization = require('../session/check-authorization');
const { addPhotos } = require('../../repositories/admin-repository');


const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

async function uploadPhotoUC(file, authorization) {
  const { uuid } = await checkAuthorization(authorization);
  cloudinary.v2.uploader.upload_stream({
    resource_type: 'raw',
    use_filename: true,
    format: 'jpg',
    crop: 'limit',
  }, async (err, result) => {
    if (err) {
      throw new Error(err.mesage);
    }

    const {
      etag,
      secure_url: secureUrl,
    } = result;

    try {
      await addPhotos(secureUrl, uuid);
    } catch (e) {
      throw new Error(e.mesage);
    }
    return etag;
  }).end(file.buffer);
}

module.exports = uploadPhotoUC;
