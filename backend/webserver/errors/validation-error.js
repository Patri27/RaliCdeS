'use strict';

class ValidationError extends Error {
  constructor(message) {
    super();
    this.name = 'ValidationError';
    this.message = message;
  }
}

function createValidationError(message) {
  return new ValidationError(message);
}

module.exports = createValidationError;
