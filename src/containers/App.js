import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { client as apolloClient } from '../apollo/index'

import App from 'components/App'

export default class AppContainer extends Component {
  render () {
    return (
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    )
  }
}
