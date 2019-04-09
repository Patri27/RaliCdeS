'use strict';

const addToRouteUC = require('../../../domain/use-cases/admin/add-to-route-uc');

async function addToRouteC(req, res, next) {
  const sponsorContent = { ...req.body };
  const { authorization } = req.headers;

  try {
    await addToRouteUC(sponsorContent, authorization);
    return res.status(201).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = addToRouteC;
