'use strict';

const { expect } = require('chai');
const knex = require('knex');
const supertest = require('supertest');
const app = require('../src/app');
const { makeClientsArray, adminRole } = require('./client.fixtures');
let db;
const AuthService = require('../src/auth/auth-service');

before('make knex instance', () => {
  db = knex({
    client: 'pg',
    connection: process.env.TEST_DB_URL,
  });
  app.set('db', db);
});

before('clean the table', () => db('clients').truncate());
beforeEach('clean the table', () => db('adminLogin').truncate());

afterEach('cleanup', () => db('clients').truncate());

describe('GET /clients', () => {
  context('Given there are no clients', () => {
    it('responds with 200 and an empty list', () => {
      return supertest(app).get('/clients').expect(200, []);
    });
  });
});

describe(`GET /clients/:clientId`, () => {
  context('Given there are clients in the database', () => {
    const testClients = makeClientsArray();

    beforeEach('insert client', () => {
      return db.into('clients').insert(testClients);
    });

    it('responds with a 200 and the specified client', () => {
      const clientId = 2;
      const expectedClient = testClients[clientId - 1];

      return supertest(app)
        .get(`/clients/${clientId}`)
        .expect((res) => {
          return res.body.id === expectedClient.id;
        });
    });
  });
});

describe(`PATCH /clients/:clientId`, () => {
  it(`updates a client, responding with 201 and the updated client`, function () {
    this.retries(3);
    const newClient = {
      id: 1,
      name: 'Kurapika',
      number: '555-0011',
      email: 'kurapika@gmail.com',
      type: 'clean',
      category: 'potentialClients',
    };
    return supertest(app).patch('/clients/:1').send(newClient).expect(204);
  });
});

describe(`POST /clean`, () => {
  it(`creates a cleanup request, responding with 201 and the new cleanup`, function () {
    this.retries(3);
    const newCleanup = {
      name: 'test',
      number: '786576',
      email: 'khgfky',
    };
    return supertest(app)
      .post('/clean')
      .send(newCleanup)
      .expect(201)
      .expect((res) => {
        expect(res.body.name).to.eql(newCleanup.name);
        expect(res.body.number).to.eql(newCleanup.number);
        expect(res.body.email).to.eql(newCleanup.email);
        expect(res.body).to.have.property('id');
      });
  });
  const requiredFields = ['name', 'number', 'email'];
});

describe(`POST /lawn`, () => {
  it(`creates a lawn request, responding with 201 and the new lawn`, function () {
    this.retries(3);
    const newLawn = {
      name: 'test',
      number: '786576',
      email: 'khgfky',
    };
    return supertest(app)
      .post('/lawn')
      .send(newLawn)
      .expect(201)
      .expect((res) => {
        expect(res.body.name).to.eql(newLawn.name);
        expect(res.body.number).to.eql(newLawn.number);
        expect(res.body.email).to.eql(newLawn.email);
        expect(res.body).to.have.property('id');
      });
  });
  const requiredFields = ['name', 'number', 'email'];
});

describe(`POST /sod`, () => {
  it(`creates a sod request, responding with 201 and the new sod`, function () {
    this.retries(3);
    const newSod = {
      name: 'test',
      number: '786576',
      email: 'khgfky',
    };
    return supertest(app)
      .post('/sod')
      .send(newSod)
      .expect(201)
      .expect((res) => {
        expect(res.body.name).to.eql(newSod.name);
        expect(res.body.number).to.eql(newSod.number);
        expect(res.body.email).to.eql(newSod.email);
        expect(res.body).to.have.property('id');
      });
  });
  const requiredFields = ['name', 'number', 'email'];
});

describe(`POST /auth/token`, () => {
  const testAdmin = adminRole();
  let adminUser;
  beforeEach('insert admin', async () => {
    return (adminUser = await db.into('adminLogin').insert(testAdmin[0], '*'));
    // return db.into('adminLogin').insert(testAdmin[0]);
  });
  it('requires the admin user to enter correct username and password to login', function () {
    const admin = {
      password: 'pass',
      username: 'admin',
    };
    console.log(adminUser);
    const dbUser = adminUser[0];
    const sub = dbUser.username;
    const payload = {
      user_id: dbUser.id,
      name: dbUser.name,
    };
    
      const authToken = AuthService.createJwt(sub, payload)
  
    return supertest(app).post('/auth/token').send(admin).expect({
      authToken
    });
  });
});

// describe(`PUT /auth/token`, () => {
//   it('denies access to users without bearer token', function () {
//     const testAdmin = adminRole();

//     beforeEach('insert admin', () => {
//       return db.into('adminLogin').insert(testAdmin);
//     });
//     const admin = {
//       password: 'pass',
//       username: 'admin',
//     };
//     return supertest(app).put('/auth/token').send(admin).expect({
//       error: 'Missing bearer token',
//     });
//   });
// });
