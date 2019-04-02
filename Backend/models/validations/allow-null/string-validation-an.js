'use strict';

// Validation for strings that allow null

const Joi = require('joi');

const stringAN = Joi.string().allow(null);

module.exports = stringAN;
