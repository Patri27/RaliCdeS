'use strict';

const addRouteUC = require('../../../domain/use-cases/admin/add-route-uc');

async function addRouteC(req, res, next) {
  const routeContent = { ...req.body };
  const { authorization } = req.headers;

  try {
    await addRouteUC(routeContent, authorization);
    return res.status(201).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = addRouteC;
