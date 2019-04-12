'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const routeSchema = new Schema({
  name: String,
  start: String,
  aproximatedLength: String,
  places: [{
    name: String,
    url: String,
    category: String, // resting, eating, sightseeing
  }],
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;
