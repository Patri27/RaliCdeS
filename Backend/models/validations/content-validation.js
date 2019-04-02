'use strict';

const Joi = require('joi');

const content = Joi.string().min(5).max(1024).required();

module.exports = content;
