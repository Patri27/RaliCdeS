'use strict';

class AuthenticationError extends Error {
  constructor(message) {
    super();
    this.name = 'AuthenticationError';
    this.message = message;
  }
}

function createAuthenticationError(message) {
  return new AuthenticationError(message);
}

module.exports = createAuthenticationError;
