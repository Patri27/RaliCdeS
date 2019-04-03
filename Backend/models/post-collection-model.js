'use strict';

const mongoose = require('mongoose');

const { Schema, Schema: { ObjectId } } = mongoose;

const postCollectionSchema = new Schema(
  {
    uuid: {
      type: String,
      unique: true,
    },
    post: [ObjectId],
  }
);

const Car = mongoose.model('Car', postCollectionSchema);

module.exports = Car;
