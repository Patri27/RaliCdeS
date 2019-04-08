'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const aboutUsSchema = Schema(
  {
    title: String,
    author: String,
    content: String,
    lastUpdatedAt: {
      type: Date,
      default: Date.now,
    },
  }
);

const AboutUs = mongoose.model('AboutUs', aboutUsSchema);

module.exports = AboutUs;
