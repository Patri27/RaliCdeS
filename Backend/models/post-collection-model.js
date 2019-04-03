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

const PostCollection = mongoose.model('PostCollection', postCollectionSchema);

module.exports = PostCollection;
