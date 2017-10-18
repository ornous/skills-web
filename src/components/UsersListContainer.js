import React, { Component } from 'react'
import UsersList from './UsersList'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class UsersListContainer extends Component {
  render () {
    console.log(this.props.match)
    const { loading, error, people } = this.props.data
    if (loading) {
      return <div>Loading users...</div>
    }

    if (error) {
      return (
        <div>
          Failed to fetch users<br />
          {error.message}
        </div>
      )
    }

    return <UsersList users={people} />
  }
}

const UsersQuery = gql`
  query users {
    people {
      id
      email
      firstName
      lastName
    }
  }
`

export default graphql(UsersQuery)(UsersListContainer)
