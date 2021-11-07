import BookList from "./components/BookList";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AddBook from "./components/AddBook";

// Apoll client setup

const client = new ApolloClient({ uri: "http://localhost:5000/graphql", cache: new InMemoryCache() });

function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Reading list</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
