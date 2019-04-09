'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const gallerySchema = new Schema({
  images: [{
    title: String,
    url: String,
    description: String,
    uploadedBy: String,
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  }],
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
