'use strict';

const updateUserProfileUC = require('../../domain/use-cases/user/update-user-profile-uc');

async function updateUserProfile(req, res, next) {
  const userDataProfile = { ...req.body };
  const { authorization } = req.headers;

  try {
    await updateUserProfileUC(userDataProfile, authorization);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = updateUserProfile;
