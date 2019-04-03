'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const sponsorSchema = new Schema({
  name: String,
  about: String,
  location: String,
  inRoute: [String],
  description: String,
  pictures: [String],
  coordinates: [String],
});

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

module.exports = Sponsor;
