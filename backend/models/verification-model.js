'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const verificationSchema = new Schema(
  {
    uuid: String,
    verificationCode: String,
    verifiedAt: {
      type: Date,
      default: null,
    },
  }
);

const Verification = mongoose.model('Verification', verificationSchema);

module.exports = Verification;
