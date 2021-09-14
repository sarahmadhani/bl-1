import supertest from 'supertest';

const env = require('dotenv').config();

const api = supertest('https://jsonplaceholder.cypress.io');

export const endpointGetUsers = async () => api.get('/posts')
  .set('Accept', 'application/json') ;


export const endpointCreateUser = async (body) => api.post('/posts')
.set('Accept', 'application/json')
.send(body) ;
