'use strict';

const { getEvents } = require('../../repositories/shared-repository');

async function GetEventsUC() {
  try {
    const events = await getEvents();
    return events;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = GetEventsUC;
