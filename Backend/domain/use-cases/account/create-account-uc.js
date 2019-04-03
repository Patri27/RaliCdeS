'use strict';

const Joi = require('joi');
const uuidV4 = require('uuid/v4');
const bcrypt = require('bcrypt');

const { emailSchema, passwordSchema } = require('../../../models/validations-models');
const { insertUserIntoMySQLDatabase, createUserInMongoDB } = require('../../repositories/account-repository');

async function validate(payload) {
  const schema = {
    email: emailSchema,
    password: passwordSchema,
  };

  return Joi.validate(payload, schema);
}

async function createAccountUC(email, password) {
  await validate({ email, password });

  try {
    // creating secure password with bcrypt, generating uuid
    const now = new Date(); // getting creation date
    const UserToInsert = {
      securePassword: await bcrypt.hash(password, 10),
      uuid: uuidV4(),
      createdAt: now.toISOString().substring(0, 19).replace('T', ' '),
    };

    const { securePassword, uuid, createdAt } = UserToInsert;

    await insertUserIntoMySQLDatabase(email, securePassword, uuid, createdAt);

    // initializing values to null
    const userProfileData = {
      uuid,
      avatarUrl: null,
      fullName: null,
      location: null,
      description: null,
      following: [],
      followers: [],
      cars: [],
      posts: [],
    };

    await createUserInMongoDB(uuid, userProfileData);

    return null;
  } catch (e) {
    return new Error(e.message);
  }
}

module.exports = createAccountUC;
