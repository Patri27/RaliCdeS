'use strict';

const dot = require('dot-object');
const UserModel = require('../../models/user-model');

// Update user profile
/**
 * @param {String} uuid
 * @param {Object} userData data to be updated
 * @return {Object} null if everything is ok
 */
async function updateUserProfile(uuid, userData) {
  const userDataProfileMongoose = dot.dot(userData);
  await UserModel.updateOne({ uuid }, userDataProfileMongoose);

  return null;
}

module.exports = {
  updateUserProfile,
};
