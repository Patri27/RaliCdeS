'use strict';

const mongoose = require('mongoose');

const { Schema, Schema: { ObjectId } } = mongoose;

const userSchema = new Schema({
  fullName: String,
  uuid: {
    type: String,
    unique: true,
  },
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
    objectId: ObjectId,
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
