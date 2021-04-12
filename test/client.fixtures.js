'use strict';

function makeClientsArray() {
  return [
    {
      id: 1,
      name: 'Kurapika',
      number: '555-0011',
      email: 'kurapika@gmail.com',
      type: 'clean',
      category: 'potentialClients',
    },
    {
      id: 2,
      name: 'Leorio',
      number: '563756',
      email: 'leorio@gmail.com',
      type: 'clean',
      category: 'potentialClients',
    },
    {
      id: 3,
      name: 'Hisoka',
      number: '457567',
      email: 'hisoka@gmail.com',
      type: 'clean',
      category: 'potentialClients',
    },
    {
      id: 4,
      name: 'Killua',
      number: '37567',
      email: 'killua@gmail.com',
      type: 'clean',
      category: 'potentialClients',
    },
  ];
}

function adminRole() {
  return [
    {
      // id: 1,
      username: 'admin',
      password: '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG',
    },
  ];
}

module.exports = { makeClientsArray, adminRole };
