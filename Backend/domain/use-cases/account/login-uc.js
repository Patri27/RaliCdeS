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

async function loginUC(email, password) {
  await validate({ email, password });

  const userData = await checkIfUserExists(email);

  if (userData.activated_at) {
    const isThePasswordValid = await bcrypt.compare(password, userData.password);
    if (isThePasswordValid === false) {
      return new Error();
    }
    const payloadJwt = {
      uuid: userData.uuid,
    };

    const jwtTokenExpiration = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL, 10);
    jwt.sign(
      payloadJwt,
      process.env.AUTH_JWT_SECRET,
      { expiresIn: jwtTokenExpiration }
    );
    return new Error();
  }
  return null;
}

module.exports = loginUC;
