'use strict';

const NewsModel = require('../../models/news-model');
const AboutModel = require('../../models/about-model');
const AboutUsModel = require('../../models/about-us-model');
const EventModel = require('../../models/event-model');
const RouteModel = require('../../models/route-model');
const SponsorModel = require('../../models/sponsor-model');
const ImageModel = require('../../models/image-model');

/**
 * @param {Object} newsContent
 * @param {String} uuid
 * @returns query result
 */
async function createNews(newsContent, uuid) {
  const {
    title, content, category,
  } = newsContent;

  const data = {
    title,
    author: uuid,
    content,
    lastModifiedAt: null,
    deletedAt: null,
    category,
  };

  await NewsModel.create(data);
}

/**
 * @param {ObjectId} newsId
 * @returns query result
 */
async function removeNews(newsId) {
  const filter = {
    _id: newsId,
  };

  const now = Date.now();
  const operation = {
    deletedAt: now,
  };

  await NewsModel.updateOne(filter, operation);
}

/**
 * @param {Object} newsContent
 * @param {ObjectId} newsId
 */
async function updateNews(newsContent, newsId) {
  const {
    title, content, category,
  } = newsContent;

  const filter = {
    _id: newsId,
  };

  const operation = {
    $set: {
      title,
      content,
      lastModifiedAt: Date.now(),
      category,
    },
  };

  await NewsModel.updateOne(filter, operation);
}

/**
 * @param {Object} aboutContent
 * @param {String} uuid
 */
async function updateAbout(aboutContent, uuid) {
  const { title, content } = aboutContent;
  const query = { title, author: uuid, content };

  await AboutModel.update(query);
}

async function updateAboutUs(aboutUsContent, uuid) {
  const { title, content } = aboutUsContent;
  const query = { title, author: uuid, content };
  await AboutUsModel.update(query);
}

async function addEvent(eventData) {
  await EventModel.create(eventData);
}

async function addRoute(data) {
  await RouteModel.create(data);
}

async function addSponsor(sponsorData) {
  await SponsorModel.create(sponsorData);
}

async function addToRoute(sponsorData) {
  const {
    inRoute, name, url, category,
  } = sponsorData;
  const filter = { name: inRoute };
  const op = { $addToSet: { name, url, category } };

  await RouteModel.updateMany(filter, op);
}

async function addPhotos(secureUrl, uuid) {
  const picture = {
    title: null,
    url: secureUrl,
    description: null,
    uploadedBy: uuid,
  };

  await ImageModel.create(picture);
}

async function updatePhoto(imageContent, imageUrl) {
  const filter = {
    secureUrl: imageUrl,
  };

  const operation = imageContent;

  await ImageModel.findOneAndUpdate(filter, operation);
}

module.exports = {
  createNews,
  removeNews,
  updateNews,
  updateAbout,
  updateAboutUs,
  addEvent,
  addRoute,
  addSponsor,
  addToRoute,
  addPhotos,
  updatePhoto,
};
