'use strict';

const express = require('express');
const createNews = require('../../controllers/admin/create-news-c');
const removeNews = require('../../controllers/admin/remove-news-c');
const updateNews = require('../../controllers/admin/update-news-c');

const newsRouter = express.Router();

newsRouter.post('news/add', createNews);
newsRouter.delete('news/remove', removeNews);
newsRouter.put('news/update', updateNews);

module.exports = newsRouter;
