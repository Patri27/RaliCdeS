'use strict';

const Joi = require('joi');

const booleanSchema = Joi.bool().required();

module.exports = booleanSchema;
