'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  name: String,
  description: String,
  date: Date,
  location: String,
  type: String,
});

eventSchema.index({
  title: 'text',
  content: 'text',
  location: 'text',
});

const Post = mongoose.model('Post', eventSchema);

module.exports = Post;
