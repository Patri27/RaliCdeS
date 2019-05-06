'use strict';

const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { emailSchema, passwordSchema } = require('../../../models/validations-models');
const { checkIfUserExists } = require('../../repositories/account-repository');
const { AuthenticationError, PreconditionError } = require('../../../webserver/errors/index');

async function validate(payload) {
  const schema = {
    email: emailSchema,
    password: passwordSchema,
  };

  return Joi.validate(payload, schema);
}

function isActivated(userData) {
  return userData.verified;
}

async function isThePasswordValid(password, userData) {
  const passwordChecked = await bcrypt.compare(password, userData.securePassword);
  return passwordChecked;
}

async function loginUC(email, password) {
  await validate({ email, password });

  const userData = await checkIfUserExists(email);

  if (userData === null) {
    throw new Error();
  }

  const isAccountActivated = isActivated(userData);
  if (!isAccountActivated) {
    throw new PreconditionError();
  }

  const isPasswordValid = await isThePasswordValid(password, userData);

  if (!isPasswordValid) {
    throw new AuthenticationError();
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
