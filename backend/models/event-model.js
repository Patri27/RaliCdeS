'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  name: String,
  description: String,
  date: Date,
  location: String,
});

eventSchema.index({
  title: 'text',
  content: 'text',
  location: 'text',
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
