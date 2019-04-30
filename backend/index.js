'use strict';

require('dotenv').config();
const httpServerConfig = require('./config/http.server.config');
const webServer = require('./webserver');
const mysqlPool = require('./databases/mysql-pool');
const mongoPool = require('./databases/mongo-pool');

process.on('uncaughtException', (err) => {
  console.error('excepción inesperada', err.message, err);
});

process.on('unhandledRejection', (err) => {
  console.error('Error inesperado', err.message, err);
});

/**
 * Initialize dependencies
 * */
(async function initApp() {
  try {
    await mysqlPool.connect();
    await mongoPool.connect();
    await webServer.listen(httpServerConfig.port);
    console.log(`server running at: ${httpServerConfig.port}`);
  } catch (e) {
    await webServer.close();
    process.exit(1);
  }
}());
