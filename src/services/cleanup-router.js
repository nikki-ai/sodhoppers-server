'use strict';

const express = require('express');
const ClientsService = require('./clients-service');
const json = require('body-parser').json();

const cleanupRouter = express.Router();

cleanupRouter.route('/').post(json, async (req, res) => {
  //Add a new cleanup to the potential clients.
  const { name, number, email } = req.body;
  const type = 'clean';
  const category = 'potentialClients';
  const newCleanup = { name, number, email, type, category };
  const client = await ClientsService.insertClient(
    req.app.get('db'),
    newCleanup
  );
  res.status(201).json(newCleanup);
});

module.exports = cleanupRouter;
