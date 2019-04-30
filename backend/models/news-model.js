'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const newsSchema = new Schema({
  title: String,
  author: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastModifiedAt: Date,
  deletedAt: Date,
  archives: [String],
  category: String,
});

newsSchema.index({
  title: 'text',
  category: 'text',
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
