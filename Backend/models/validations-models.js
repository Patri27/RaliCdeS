'use strict';

const Joi = require('joi');

const booleanSchema = Joi.bool().required();
const textSchema = Joi.string().min(5).max(1024).required();
const emailSchema = Joi.string().email({ minDomainAtoms: 2 }).required();
const objectSchema = Joi.object(); // .keys({})
const passwordSchema = Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required();
const stringSchema = Joi.string().min(3).max(128).required();
const uuidSchema = Joi.string().guid({
  version: ['uuidv4'],
});

// Null allowed
const stringNaSchema = Joi.string().allow(null);
const uriNaSchema = Joi.string().uri().allow(null);


module.exports = {
  booleanSchema,
  textSchema,
  emailSchema,
  objectSchema,
  passwordSchema,
  stringSchema,
  uuidSchema,
  stringNaSchema,
  uriNaSchema,
};
