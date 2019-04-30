'use strict';

const express = require('express');

const GetNewsC = require('../controllers/shared/get-news-c');
const GetEventsC = require('../controllers/shared/get-events-c');
const GetGalleryC = require('../controllers/shared/get-gallery-c');
const GetAboutC = require('../controllers/shared/get-about-c');
const GetAboutUsC = require('../controllers/shared/get-about-us-c');

const sharedRouter = express.Router();

sharedRouter.get('/news', GetNewsC);
sharedRouter.get('/events', GetEventsC);
sharedRouter.get('/gallery', GetGalleryC);
sharedRouter.get('/about', GetAboutC);
sharedRouter.get('/about', GetAboutUsC);

module.exports = sharedRouter;
