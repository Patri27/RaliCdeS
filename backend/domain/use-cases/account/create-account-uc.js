'use strict';

const Joi = require('joi');
const uuidV4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const sgMail = require('@sendgrid/mail');

const { emailSchema, passwordSchema, stringSchema } = require('../../../models/validations-models');
const {
  insertAccountData, createUserInMongoDB, insertVerificationCode,
} = require('../../repositories/account-repository');
const { ConflictError } = require('../../../webserver/errors/index');

async function validate(payload) {
  const schema = {
    fullName: stringSchema,
    email: emailSchema,
    password: passwordSchema,
  };

  return Joi.validate(payload, schema);
}

/**
 * Send email to activate account
 * @param {String} userEmail
 * @param {String} verificationCode
 * @return {Object} Sengrid response
 */
async function sendVerificationCode(userEmail, verificationCode) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: userEmail,
    from: {
      email: 'pbarcena27@gmail.com',
      name: 'Rali Camino de Santiago',
    },
    subject: 'Bienvenido/a a la página oficial del Rali Camino de Santiago',
    text: 'Después de confirmar la cuenta podrás modificar los contenidos de la página.',
    html: `Para confirmar la cuenta 
    <a href="${process.env.HTTP_SERVER_DOMAIN}/api/account/activate?verification_code=${verificationCode}">pulsa este enlace</a>`,
  };

  await sgMail.send(msg);

  return null;
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

  const verificationCode = uuidV4();
  const { securePassword, uuid, createdAt } = UserToInsert;

  try {
    await insertAccountData(email, securePassword, uuid, createdAt);
  } catch (e) {
    throw new ConflictError(e);
  }

  try {
    await insertVerificationCode(uuid, verificationCode);
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
    await createUserInMongoDB(userProfileData);
  } catch (e) {
    throw new Error(e.message);
  }

  try {
    await sendVerificationCode(email, verificationCode);
  } catch (e) {
    throw new Error(e.message);
  }
  return null;
}

module.exports = createAccountUC;
