import { gql } from "@apollo/client";

export const AUTHENTICATE_MUTATION = gql`
  mutation Authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
      id
      email
      name
      company
    }
  }
`