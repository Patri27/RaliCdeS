'use strict';

const dot = require('dot-object');
const UserModel = require('../../models/user-model');
const PostModel = require('../../models/post-model');
const PostCollectionModel = require('../../models/post-collection-model');

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

/**
 *  Create post
 * @param {Object} data
 * @returns post._id
 */

async function createPost(data) {
  const { _id } = await PostModel.create(data);

  return _id;
}

async function insertIntoPostCollection(filter, operation, options) {
  await PostCollectionModel.findOneAndUpdate(filter, operation, options);

  return null;
}

module.exports = {
  updateUserProfile,
  createPost,
  insertIntoPostCollection,
};
