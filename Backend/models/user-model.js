'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  uuid: {
    type: String,
    unique: true,
  },
  following: [{
    uuid: String,
    since: Date,
  }],
  followers: [{
    uuid: String,
    since: Date,
  }],
  avatarUrl: String,
  location: String,
  description: String,
  cars: [{
    brand: String,
    model: String,
    year: Number,
    current: Boolean,
  }],
  posts: [{
    author: String,
    content: String,
    location: String,
  }],
});

userSchema.index(
  {
    fullName: 'text',
    location: 'text',
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
