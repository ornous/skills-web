import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { split } from 'apollo-link'
import { createHttpLink as HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import 'semantic-ui-css/semantic.min.css'
import './index.css'
import App from 'components/App'
import registerServiceWorker from './registerServiceWorker'

// Get this into the environment somehow
const APP_HOST = 'localhost'
const APP_PORT = 3001

const httpLink = new HttpLink({
  uri: `http://${APP_HOST}:${APP_PORT}/graphql`
})
const wsLink = new WebSocketLink({
  uri: `ws://${APP_HOST}:${APP_PORT}/subscriptions`,
  options: { reconnect: true }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
