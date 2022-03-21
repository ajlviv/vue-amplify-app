/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEntity = /* GraphQL */ `
  query GetEntity($id: ID!) {
    getEntity(id: $id) {
      id
      title
      type
      createdAt
      updatedAt
    }
  }
`;
export const listEntities = /* GraphQL */ `
  query ListEntities(
    $filter: ModelEntityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
