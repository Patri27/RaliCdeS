'use strict';

const Joi = require('joi');

const shortString = Joi.string().min(3).max(128).required();

module.exports = shortString;
