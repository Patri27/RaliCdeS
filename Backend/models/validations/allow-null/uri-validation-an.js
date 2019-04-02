'use strict';

// Validation for uris that allow null

const Joi = require('joi');

const uriAN = Joi.string().uri().allow(null);

module.exports = uriAN;
