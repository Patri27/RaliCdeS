'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema({
  title: String,
  url: String,
  description: String,
  uploadedBy: String,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: Date,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
