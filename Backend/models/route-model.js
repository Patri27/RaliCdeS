'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const routeSchema = new Schema({
  start: String,
  length: String,
  resting: [{
    name: String,
    url: String,
    number: Number,
  }],
  eating: [{
    name: String,
    url: String,
    number: Number,
  }],
  sightseeing: [{
    name: String,
    url: String,
    number: Number,
  }],
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;
