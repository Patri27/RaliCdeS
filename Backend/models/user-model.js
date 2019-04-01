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
  description: String,
  cars: [{
    brand: String,
    model: String,
    year: Number,
  }],
});

userSchema.index(
  {
    fullName: 'text',
    'preferences.linkedIn': 'text',
    'preferences.twitter': 'text',
    'preferences.github': 'text',
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
