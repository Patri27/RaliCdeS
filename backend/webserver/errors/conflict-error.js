'use strict';

class ConflictError extends Error {
  constructor(message) {
    super();
    this.name = 'ConflictError';
    this.message = message;
  }
}

function createConflictError(message) {
  return new ConflictError(message);
}

module.exports = createConflictError;
