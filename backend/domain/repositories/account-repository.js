'use strict';

const UserModel = require('../../models/user-model');
const AccountModel = require('../../models/account-model');
const VerificationModel = require('../../models/verification-model');

// Create account functions
/**
 * Insert user into mongodb
 * @param {String} email
 * @param {String} securePassword
 * @param {String} uuid
 * @param {Date} createdAt
 * @returns null
 */

async function insertAccountData(email, securePassword, uuid, createdAt) {
  const verified = false;
  const accountData = {
    email, securePassword, uuid, createdAt, verified,
  };

  await AccountModel.create(accountData);
  return null;
}

async function insertVerificationCode(uuid, verificationCode) {
  await VerificationModel.create({ uuid, verificationCode });
  return null;
}

/**
 * Insert user into mongodb
 * @param {Object} userProfileData
 * @returns {Object} null
 */
async function createUserInMongoDB(userProfileData) {
  await UserModel.create(userProfileData);
  return null;
}

/**
 * Sets verification time and sets account to activated
 * @param {string} verificationCode
 */
async function verifyAccount(verificationCode) {
  const now = new Date().toISOString().substring(0, 19).replace('T', ' ');
  const query = {
    verificationCode,
  };
  const operation = {
    verifiedAt: now,
  };

  await VerificationModel.updateOne(query, operation);
  const { uuid } = await VerificationModel.findOne(query, { uuid: 1 });
  await AccountModel.updateOne({ uuid }, { verified: true });
  return null;
}

// Login functions
/**
 * @param {String} email
 * @returns {Object} result[0] --> User data
 */
async function checkIfUserExists(email) {
  const userData = await AccountModel.findOne(
    { email },
    {
      securePassword: 1,
      activated: 1,
      verified: 1,
    }
  );

  return userData;
}

module.exports = {
  insertAccountData,
  insertVerificationCode,
  createUserInMongoDB,
  verifyAccount,
  checkIfUserExists,
};
