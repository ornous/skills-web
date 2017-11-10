import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { Icon, Input, List } from 'semantic-ui-react'
import moment from 'moment'

import CreateUserForm from 'components/CreateUserForm'

class CreateUserFormContainer extends Component {
  constructor (props) {
    super(props)
    this.handleCreateUser = this.handleCreateUser.bind(this)
  }

  handleCreateUser (firstName, lastName, email, password) {
    this.props.createUser(firstName, lastName, email, password)
  }

  render () {
    return <CreateUserForm createUser={this.props.createUser} />
  }
}

const createUser = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $authProvider: AuthProviderSignupData!
  ) {
    user: createUser(
      firstName: $firstName
      lastName: $lastName
      authProvider: $authProvider
    ) {
      id
      firstName
      lastName
      email
    }
  }
`

export default graphql(createUser, {
  name: 'createUser',
  props: ({ createUser }) => ({
    createUser: (firstName, lastName, email, password) => {
      return createUser({
        variables: {
          firstName,
          lastName,
          authProvider: { email: { email, password } }
        }
      })
    }
  })
})(CreateUserFormContainer)
