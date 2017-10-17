import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

const UserProfile = styled.div`
  background-color: tomato;
  padding: 10px;
`

class UsersListContainer extends Component {
  render () {
    const { loading, error, people } = this.props.data
    if (loading) {
      return <div>Loading user...</div>
    }

    if (error) {
      return (
        <div>
          Failed to fetch user<br />
          {error.message}
        </div>
      )
    }

    const user = people[0]
    return (
      <UserProfile>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email Address: {user.email}</p>
        Skills:
        <ul>
          {user.skills.map(skill => <li key={skill.id}>{skill.name}</li>)}
        </ul>
      </UserProfile>
    )
  }
}

const UsersQuery = gql`
  query users($userId: Int!) {
    people(id: $userId) {
      id
      email
      firstName
      lastName
      skills {
        name
      }
    }
  }
`

export default graphql(UsersQuery, {
  options: ({ match: { params: { userId } } }) => ({ variables: { userId } })
})(UsersListContainer)
