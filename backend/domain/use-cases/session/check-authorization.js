'use strict';

const jwt = require('jsonwebtoken');

const { AuthenticationError } = require('../../../webserver/errors/index');

async function checkAuthorization(authorization) {
  if (!authorization) {
    throw new AuthenticationError();
  }
  const [prefix, token] = authorization.split(' ');
  if (prefix !== 'JWT' || !token) {
    throw new AuthenticationError();
  }

  const decoded = jwt.verify(token, process.env.AUTH_JWT_SECRET);

  return (!decoded) ? new AuthenticationError() : {
    uuid: decoded.uuid,
    role: decoded.role,
  };
}

module.exports = checkAuthorization;
