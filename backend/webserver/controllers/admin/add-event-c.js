'use strict';

const addEventUC = require('../../../domain/use-cases/admin/add-event-uc');

async function addEvent(req, res, next) {
  const eventContent = { ...req.body };
  const { authorization } = req.headers;

  try {
    await addEventUC(eventContent, authorization);
    return res.status(201).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = addEvent;
