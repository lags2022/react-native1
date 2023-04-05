import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://192.168.0.5:4000/",
  }),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}
//si gustas esto lo puedes cambiar con un estado del style light segun midu
