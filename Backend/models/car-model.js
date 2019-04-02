'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const carSchema = new Schema(
  {
    brand: String,
    model: String,
    year: Number,
    owner: {
      type: String,
      unique: true,
    },
  }
);

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
