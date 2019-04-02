'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  author: String,
  content: String,
  favourite: [String],
  comments: [{
    message: String,
    createdAt: Date,
    author: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modified: Boolean,
  deletedAt: Date,
});

postSchema.index({
  title: 'text',
  content: 'text',
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
