import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { createHttpLink as Link } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const client = new ApolloClient({
  link: new Link({ uri: 'http://localhost:3001/graphql' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
