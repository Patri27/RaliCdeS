'use strict';

const express = require('express');
const createNews = require('../../controllers/admin/create-news-c');

const newsRouter = express.Router();

newsRouter.post('news/add', createNews);

module.exports = newsRouter;
