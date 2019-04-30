'use strict';

const NewsModel = require('../../models/news-model');
const EventsModel = require('../../models/event-model');
const ImagesModel = require('../../models/image-model');
const AboutModel = require('../../models/about-model');
const AboutUsModel = require('../../models/about-us-model');

async function getNews() {
  const news = await NewsModel.find({ deletedAt: null }).sort({ $natural: -1 });
  return news;
}

async function getEvents() {
  const events = await EventsModel.find({ deletedAt: null }).sort({ $natural: -1 });
  return events;
}

async function getGallery() {
  const images = await ImagesModel.find({ deletedAt: null }).sort({ $natural: -1 });
  return images;
}

async function getAbout() {
  const about = await AboutModel.sort({ $natural: -1 }).limit(1);
  return about;
}

async function getAboutUs() {
  const aboutUs = await AboutUsModel.sort({ $natural: -1 }).limit(1);
  return aboutUs;
}

module.exports = {
  getEvents,
  getNews,
  getGallery,
  getAbout,
  getAboutUs,
};
