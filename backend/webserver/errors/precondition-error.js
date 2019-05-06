'use strict';

class PreconditionError extends Error {
  constructor(message) {
    super();
    this.name = 'PreconditionError';
    this.message = message;
  }
}

function createPreconditionError(message) {
  return new PreconditionError(message);
}

module.exports = createPreconditionError;
