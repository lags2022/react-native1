import ApolloClient from "apollo-boost";

const createApolloClient = () =>
  new ApolloClient({
    uri: "http://192.168.0.21:4000",
  });

export default createApolloClient;
