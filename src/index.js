import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const { REACT_APP_BE_URL } = process.env

console.log('REACT_APP_BE_URL ->', REACT_APP_BE_URL)

const client = new ApolloClient({
    uri: `${REACT_APP_BE_URL}`,
    cache: new InMemoryCache()
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);