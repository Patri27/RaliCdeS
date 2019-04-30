'use strict';

const Joi = require('joi');
const uuidV4 = require('uuid/v4');
const bcrypt = require('bcrypt');

const { emailSchema, passwordSchema, stringSchema } = require('../../../models/validations-models');
const { insertUserIntoMySQLDatabase, createUserInMongoDB } = require('../../repositories/account-repository');

async function validate(payload) {
  const schema = {
    fullName: stringSchema,
    email: emailSchema,
    password: passwordSchema,
  };

  return Joi.validate(payload, schema);
}

async function createAccountUC(fullName, email, password) {
  await validate({ fullName, email, password });


  // creating secure password with bcrypt, generating uuid
  const now = new Date(); // getting creation date
  const UserToInsert = {
    securePassword: await bcrypt.hash(password, 10),
    uuid: uuidV4(),
    createdAt: now.toISOString().substring(0, 19).replace('T', ' '),
  };

  const { securePassword, uuid, createdAt } = UserToInsert;
  try {
    await insertUserIntoMySQLDatabase(email, securePassword, uuid, createdAt);
  } catch (e) {
    throw new Error(e.message);
  }

  // initializing values to null
  const userProfileData = {
    uuid,
    avatarUrl: null,
    fullName,
    location: null,
    description: null,
    following: [],
    followers: [],
    cars: [],
    posts: [],
  };

  try {
    await createUserInMongoDB(uuid, userProfileData);
  } catch (e) {
    throw new Error(e.message);
  }

  return null;
}

module.exports = createAccountUC;
