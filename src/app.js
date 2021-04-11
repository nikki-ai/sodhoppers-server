'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const authRouter = require('./auth/auth-router');
const clientsRouter = require('./services/clients-router');
const cleanupRouter = require('./services/cleanup-router');
const lawnServiceRouter = require('./services/lawnService-router');
const sodInstallRouter = require('./services/sodInstall-router');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/auth', authRouter);
app.use('/clients', clientsRouter);
app.use('/clean', cleanupRouter);
app.use('/lawn', lawnServiceRouter);
app.use('/sod', sodInstallRouter);

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
