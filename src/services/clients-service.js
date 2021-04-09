'use strict';

const ClientsService = {
  getClients(db) {
    return db
      .from('clients')
      .select(
        'clients.id',
        'clients.name',
        'clients.number',
        'clients.email',
        'clients.type',
        'clients.category'
      );
  },

  insertClient(db, newClient) {
    return db
      .insert(newClient)
      .into('clients')
      .returning('*')
      .then(([client]) => client);
  },

  deleteClient(knex, id) {
    return knex('clients').where({ id }).delete();
  },

  updateClient(knex, updatedClient) {
    return knex('clients')
      .where({ id: updatedClient.id })
      .update(updatedClient);
  },
};

module.exports = ClientsService;
