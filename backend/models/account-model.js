'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const accountSchema = new Schema(
  {
    email: String,
    securePassword: String,
    uuid: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  }
);

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
