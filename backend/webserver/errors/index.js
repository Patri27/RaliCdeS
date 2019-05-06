'use strict';

const AuthenticationError = require('./authentication-error');
const ConflictError = require('./conflict-error');
const ForbiddenError = require('./forbidden-access-error');
const ValidationError = require('./validation-error');
const PreconditionError = require('./precondition-error');

module.exports = {
  AuthenticationError,
  ConflictError,
  ForbiddenError,
  ValidationError,
  PreconditionError,
};
