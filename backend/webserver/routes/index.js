'use strict';

const accountRouter = require('./accout-routes');
const adminRouter = require('./admin-routes');
const sharedRouter = require('./shared-routes');
const userRouter = require('./user-routes');


module.exports = {
  accountRouter,
  sharedRouter,
  adminRouter,
  userRouter,
};
