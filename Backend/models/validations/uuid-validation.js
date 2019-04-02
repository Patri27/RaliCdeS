'use strict';

const Joi = require('joi');

const content = Joi.string().guid({
  version: ['uuidv4'],
});

module.exports = content;
