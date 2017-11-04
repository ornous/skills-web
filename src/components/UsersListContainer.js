import React, { Component } from 'react'
import UsersList from './UsersList'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class UsersListContainer extends Component {
  componentWillMount () {
    this.props.subscribeToNewUsers()
  }

  render () {
    const { loading, people, error } = this.props
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

const newUsersSubscription = gql`
  subscription onUserAdded {
    userCreated {
      id
      email
      firstName
      lastName
    }
  }
`

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
const withData = graphql(UsersQuery, {
  name: 'users',
  props: ({ users }) => {
    return {
      loading: users.loading,
      error: users.error,
      people: users.people,
      subscribeToNewUsers: params =>
        users.subscribeToMore({
          document: newUsersSubscription,
          updateQuery: (prev, { subscriptionData }) => {
            const newFeedItem = subscriptionData.userCreated
            return Object.assign({}, prev, {
              people: [newFeedItem, ...prev.people]
            })
          }
        })
    }
  }
})

export default withData(UsersListContainer)
