'use strict';

const express = require('express');
const ClientsService = require('./clients-service');
const json = require('body-parser').json();

const sodInstallRouter = express.Router();

sodInstallRouter.route('/').post(json, async (req, res) => {
  //Add a new cleanup to the potential clients.
  const { name, number, email } = req.body;
  const type = 'sod';
  const category = 'potentialClients';
  const newSod = { name, number, email, type, category };
  const client = await ClientsService.insertClient(req.app.get('db'), newSod);
  res.status(201).json(newSod);
});

module.exports = sodInstallRouter;
