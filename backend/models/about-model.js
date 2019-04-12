'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const aboutSchema = new Schema(
  {
    title: String,
    author: String,
    content: String,
  }
);

const About = mongoose.model('About', aboutSchema);

module.exports = About;
