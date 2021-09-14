import shell from 'shelljs';
import * as er from '../common/expect-response';
import status from '../common/responseLibrary';
import * as epEvent from '../endpoints/post';
import * as schema from '../schema/reqres/createUser';
import * as data from '../data/reqres/createUser';

const { matchers } = require('jest-json-schema');
expect.extend(matchers);

let response;

describe('Positive Test - Post', () => {
  test('As user, i can Post', async () => {
    response = await epEvent.endpointCreateUser(data.data);
    er.expectStatus(response, status.statusCreated);
    er.expectToMatchObject(response, response.body, data.data);
    er.expectSchema(response, schema.default);
  });
});

describe('Positive Test - Get', () => {
  test('As user, i can Get', async () => {
    response = await epEvent.endpointGetUsers(data.data);
    er.expectStatus(response, status.statusOk);
    er.expectSchema(response, schema.get);
  });
});
