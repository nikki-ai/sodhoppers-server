'use strict';

const express = require('express');
const { updateClient } = require('./clients-service');
const clientsService = require('./clients-service');
const json = require('body-parser').json();

const clientsRouter = express.Router();

clientsRouter.route('/').get(async (req, res) => {
  // Return all the clients currently in the queue.
  const getAllClients = await clientsService.getClients(req.app.get('db'));
  res.status(200).json(getAllClients);
});
clientsRouter
  .route('/:clientId')
  .delete((req, res, next) => {
    clientsService
      .deleteClient(req.app.get('db'), req.params.clientId)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  })
  .patch(json, (req, res, next) => {
    console.log(req.body)
    const { id, name, number, email, type, category } = req.body;
    const movedClient = { id, name, number, email, type, category };

    for (const [key, value] of Object.entries(movedClient)) {
      if (value === null) {
        return res.status(400).json({
          error: { message: `Request must contain '${key}'.` },
        });
      }
    }
    clientsService
      .updateClient(req.app.get('db'), movedClient)
      .then((rows) => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = clientsRouter;
