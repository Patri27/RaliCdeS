'use strict';

const aboutRouter = require('./admin-routes/about-routes');
const mediaRouter = require('./admin-routes/media-routes');
const newsRouter = require('./admin-routes/news-routes');
const accountRouter = require('./accout-routes');
const routeRouter = require('./route-routes');
const sharedRouter = require('./shared-routes');
const sponsorRouter = require('./sponsor.routes');
const userRouter = require('./user-routes');


module.exports = {
  aboutRouter,
  mediaRouter,
  newsRouter,
  accountRouter,
  routeRouter,
  sharedRouter,
  sponsorRouter,
  userRouter,
};
