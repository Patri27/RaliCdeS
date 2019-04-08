'use strict';

const express = require('express');
const updateAboutUsC = require('../controllers/admin/update-about-us-c');
const updateAboutC = require('../controllers/admin/update-about-c');
const createNewsC = require('../controllers/admin/create-news-c');
const removeNewsC = require('../controllers/admin/remove-news-c');
const updateNewsC = require('../controllers/admin/update-news-c');
const addEventC = require('../controllers/admin/add-event-c');
const addRouteC = require('../controllers/admin/add-route-c');

const adminRouter = express.Router();

adminRouter.put('/about-us/update', updateAboutUsC);
adminRouter.put('/about/update', updateAboutC);
adminRouter.post('/news/add', createNewsC);
adminRouter.delete('/news/remove', removeNewsC);
adminRouter.put('/news/update', updateNewsC);
adminRouter.post('/events/add', addEventC);
adminRouter.post('/routes/add', addRouteC);

module.exports = adminRouter;
