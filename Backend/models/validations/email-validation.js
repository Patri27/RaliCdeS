'use strict';

const Joi = require('joi');

const emailSchema = Joi.string().email({ minDomainAtoms: 2 }).required();

module.exports = emailSchema;
