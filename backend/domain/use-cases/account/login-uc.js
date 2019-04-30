'use strict';

const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { emailSchema, passwordSchema } = require('../../../models/validations-models');
const { checkIfUserExists } = require('../../repositories/account-repository');

async function validate(payload) {
  const schema = {
    email: emailSchema,
    password: passwordSchema,
  };

  return Joi.validate(payload, schema);
}

function isActivated(userData) {
  return userData.activated === 1;
}

async function isThePasswordValid(password, userData) {
  const passwordChecked = await bcrypt.compare(password, userData.password);
  return passwordChecked;
}

async function loginUC(email, password) {
  await validate({ email, password });

  const userData = await checkIfUserExists(email);

  const isAccountActivated = isActivated(userData);
  if (!isAccountActivated) {
    throw new Error("Your account isn't verified yet");
  }

  const isPasswordValid = await isThePasswordValid(password, userData);

  if (!isPasswordValid) {
    throw new Error('The data you have provided is invalid, please try again');
  }

  const payloadJwt = {
    uuid: userData.uuid,
  };

  const jwtTokenExpiration = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL, 10);
  const jwtToken = jwt.sign(
    payloadJwt,
    process.env.AUTH_JWT_SECRET,
    { expiresIn: jwtTokenExpiration }
  );
  return { accessToken: jwtToken };
}

module.exports = loginUC;
