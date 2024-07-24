import gql from 'graphql-tag'

export default gql`
  type User {
    id: ID!
    email: String!
    name: String!
    company: String
  }

  type Mutation {
    mutationTest(test: Boolean): Boolean
    authenticate(email: String!, password: String!): User!
  }
`
