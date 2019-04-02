'use strict';

const Joi = require('joi');

const passwordSchema = Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required();


module.exports = passwordSchema;
