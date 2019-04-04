'use strict';

const dot = require('dot-object');
const UserModel = require('../../models/user-model');
const PostModel = require('../../models/post-model');
const PostCollectionModel = require('../../models/post-collection-model');

// Update user profile
/**
 * @param {String} uuid
 * @param {Object} userData data to be updated
 * @return {null} if everything is ok
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

/**
 * Insert created post into user's post collection
 * @param {Object} filter uuid
 * @param {Object} operation addToSet
 * @param {Object} options upsert: true
 * @returns {null} if everything is okay
 */
async function insertIntoPostCollection(filter, operation, options) {
  const { uuid } = filter;
  await PostCollectionModel.findOneAndUpdate(filter, { uuid, operation }, options);
  await UserModel.findOneAndUpdate(filter, operation, options); // needs fix
  return null;
}


module.exports = {
  updateUserProfile,
  createPost,
  insertIntoPostCollection,
};
