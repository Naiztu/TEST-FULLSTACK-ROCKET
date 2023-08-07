import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $secondName: String!
    $lastName: String!
    $secondLastName: String!
    $email: String!
    $phone: String!
    $yearBirth: Int!
    $monthBirth: Int!
    $dayBirth: Int!
  ) {
    createUser(
      name: $name
      secondName: $secondName
      lastName: $lastName
      secondLastName: $secondLastName
      email: $email
      phone: $phone
      yearBirth: $yearBirth
      monthBirth: $monthBirth
      dayBirth: $dayBirth
    ) {
      id
      name
      secondName
      lastName
      secondLastName
      email
      phone
      dateBirth
    }
  }
`;
