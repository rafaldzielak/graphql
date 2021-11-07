import BookList from "./components/BookList";

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

// Apoll client setup

const client = new ApolloClient({ uri: "http://localhost:5000/graphql", cache: new InMemoryCache() });

function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Reading list</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
