import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://localhost:3000/local/desafio",
    cache: new InMemoryCache(),
  })
}
