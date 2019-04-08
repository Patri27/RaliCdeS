'use strict';

const NewsModel = require('../../models/news-model');
const AboutModel = require('../../models/about-model');
const AboutUsModel = require('../../models/about-us-model');
const EventModel = require('../../models/event-model');
const RouteModel = require('../../models/route-model');

/**
 *  Create News
 * @param {Object} data
 */
async function createNews(data) {
  await NewsModel.create(data);
}

/**
 * @param {ObjectId} newsId
 * @returns query result
 */
async function removeNews(newsId) {
  await NewsModel.findOneAndDelete({ id: newsId });
}

/**
 * @param {Object} filter
 * @param {Object} operation
 */
async function updateNews(filter, operation) {
  await NewsModel.updateOne(filter, operation);
}

async function updateAbout(about) {
  await AboutModel.create(about, { upsert: true });
}

async function updateAboutUs(about) {
  await AboutUsModel.update(about);
}

async function addEvent(data) {
  await EventModel.create(data);
}

async function addRoute(data) {
  await RouteModel.create(data);
}


module.exports = {
  createNews,
  removeNews,
  updateNews,
  updateAbout,
  updateAboutUs,
  addEvent,
  addRoute,
};
