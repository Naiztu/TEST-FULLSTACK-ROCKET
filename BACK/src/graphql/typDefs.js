import gql from 'graphql-tag';

export const typeDefs = gql`

  type User {
    id: ID
    name: String!
    secondName: String
    lastName: String!
    secondLastName: String
    email: String!
    phone: String!
    dateBirth: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(
      name: String!
      secondName: String
      lastName: String!
      secondLastName: String
      email: String!
      phone: String!
      yearBirth: Int!
      monthBirth: Int!
      dayBirth: Int!
    ): User!
  }

`;