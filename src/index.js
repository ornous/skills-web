import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const networkInterface = createNetworkInterface({
  uri: "http://localhost:3001/graphql"
})
const client = new ApolloClient({
    networkInterface
})

ReactDOM.render(
  <ApolloProvider client={client}><App /></ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
