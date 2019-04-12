'use strict';

const jwt = require('jsonwebtoken');

async function checkAuthorization(authorization) {
  if (!authorization) {
    throw new Error('authorization was not provided');
  }
  const [prefix, token] = authorization.split(' ');
  const decoded = jwt.verify(token, process.env.AUTH_JWT_SECRET);

  return (prefix !== 'JWT' || !token || !decoded) ? new Error() : {
    uuid: decoded.uuid,
    role: decoded.role,
  };
}

module.exports = checkAuthorization;
