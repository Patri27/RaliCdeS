'use strict';

const getEventsUC = require('../../../domain/use-cases/shared/get-events-uc');

async function getEvents(req, res, next) {
  try {
    const events = await getEventsUC();
    return res.status(200).send(events);
  } catch (e) {
    return next(e);
  }
}

module.exports = getEvents;
