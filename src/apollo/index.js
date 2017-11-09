import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { split, ApolloLink } from 'apollo-link'
import { createHttpLink as HttpLink } from 'apollo-link-http'
import { RetryLink } from 'apollo-link-retry'
import { WebSocketLink } from 'apollo-link-ws'
import { onError } from 'apollo-link-error'
import { getMainDefinition } from 'apollo-utilities'
import { authLink } from './links'

// Get this into the environment somehow
const APP_HOST = '192.168.0.24'
const APP_PORT = '3001'

const max = operation => operation.getContext().max
const delay = 500
const interval = (delay, count) => {
  console.log(`retry #${count}; delay: ${delay}`)
  if (count > 5) return 1000
  return delay
}
const wsUri = `ws://${APP_HOST}:${APP_PORT}/subscriptions`
const httpUri = `http://${APP_HOST}:${APP_PORT}/graphql`

const onClientError = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
}

const queryIsSubscription = ({ query }) => {
  const { kind, operation } = getMainDefinition(query)
  return kind === 'OperationDefinition' && operation === 'subscription'
}

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(onClientError),
    authLink,
    new RetryLink().split(
      queryIsSubscription,
      new WebSocketLink({ uri: wsUri, options: { reconnect: true } }),
      new HttpLink({ uri: httpUri })
    )
  ]),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})
