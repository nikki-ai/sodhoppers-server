'use strict';

const express = require('express');
const ClientsService = require('./clients-service');
const json = require('body-parser').json();

const lawnServiceRouter = express.Router();

lawnServiceRouter.route('/').post(json, async (req, res) => {
  //Add a new cleanup to the potential clients.
  const { name, number, email } = req.body;
  const type = 'lawn';
  const category = 'potentialClients';
  const newLawn = { name, number, email, type, category };
  const client = await ClientsService.insertClient(req.app.get('db'), newLawn);
  res.status(201).json(newLawn);
});

module.exports = lawnServiceRouter;
