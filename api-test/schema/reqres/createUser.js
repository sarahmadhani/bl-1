export default {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  required: ['title', 'body', 'userId', 'id'],
  properties: {
    title: {
      type: 'string',
    },
    body: {
      type: 'string',
    },
    userId: {
      type: 'integer',
    },
    id: {
      type: 'integer',
    },
  },
  additionalProperties: true,
};

export const get = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'array',
  items: {
    anyOf: [
      {
        type: 'object',
        required: ['userId', 'id', 'title', 'body'],
        properties: {
          userId: {
            type: 'integer',
          },
          id: {
            type: 'integer',
          },
          title: {
            type: 'string',
          },
          body: {
            type: 'string',
          },
        },
        additionalProperties: true,
      },
    ],
  },
};
