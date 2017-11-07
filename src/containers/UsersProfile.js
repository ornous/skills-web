import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { Icon, Input, List } from 'semantic-ui-react'

const UserProfile = styled.div`
  background-color: tomato;
  padding: 10px;
`

class UsersListContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
    this.handleCreateSkill = this.handleCreateSkill.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleCreateSkill () {
    this.props.createSkill(this.props.userId, this.state.value)
    this.state.value = ''
  }

  render () {
    const { loading, userId, user, error } = this.props
    if (loading) {
      return <div>Loading user #{userId}</div>
    }

    if (error) {
      return (
        <div>
          Failed to fetch user<br />
          {error.message}
        </div>
      )
    }

    return (
      <UserProfile>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email Address: {user.email}</p>
        Skills:
        <List celled horizontal>
          {user.skills.map(skill => (
            <List.Item key={skill.id}>
              {skill.name + ' '}
              <Icon
                onClick={() => this.props.deleteSkill(user.id, skill.id)}
                name='cancel'
              />
            </List.Item>
          ))}
        </List>
        <Input
          size='tiny'
          action={{
            color: 'teal',
            labelPosition: 'left',
            icon: 'plus',
            content: 'Skill',
            onClick: this.handleCreateSkill.bind(this)
          }}
          actionPosition='left'
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
          placeholder='Cook Chinese Food'
        />
      </UserProfile>
    )
  }
}

const usersQuery = gql`
  query users($userId: Int!) {
    people(id: $userId) {
      id
      email
      firstName
      lastName
      skills {
        id
        name
      }
    }
  }
`

const deleteSkill = gql`
  mutation removeSkillFromUser($userId: Int!, $id: Int!) {
    removeSkillFromUser: removeSkillFromUser(userId: $userId, id: $id) {
      id
    }
  }
`

const createSkill = gql`
  mutation createSkill($userId: Int!, $name: String!) {
    addSkillToUser: addSkillToUser(userId: $userId, name: $name) {
      id
      name
    }
  }
`

export default compose(
  graphql(usersQuery, {
    options: ({ match: { params: { userId } } }) => ({ variables: { userId } }),
    props: ({ data }) => {
      if (data.loading) {
        return {
          userId: data.variables.userId,
          loading: data.loading
        }
      }

      return {
        loading: data.loading,
        error: data.error,
        userId: data.variables.userId,
        user: data.people[0]
      }
    }
  }),
  graphql(deleteSkill, {
    name: 'deleteSkill',
    props: ({ deleteSkill }) => ({
      deleteSkill: (userId, id) =>
        deleteSkill({
          variables: { userId, id },
          refetchQueries: [{ query: usersQuery, variables: { userId } }]
        })
    })
  }),
  graphql(createSkill, {
    name: 'createSkill',
    props: ({ createSkill }) => ({
      createSkill: (userId, name) =>
        createSkill({
          variables: { userId, name },
          refetchQueries: [
            {
              query: usersQuery,
              variables: { userId, name }
            }
          ],
          optimisticResponse: {
            __typename: 'Skills_Mutations',
            addSkillToUser: {
              __typename: 'Skill',
              id: Math.floor(Math.random() * 100000),
              name
            }
          }
        })
    })
  })
)(UsersListContainer)
