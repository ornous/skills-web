import React, { Component } from 'react'
import SkillsList from './SkillsList'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class SkillsListContainer extends Component {
  render () {
    const { loading, error, people } = this.props.data
    if (loading) {
      return <div>Loading your skills...</div>
    }

    if (error) {
      return (
        <div>
          Failed to fetch your skills<br />
          {error.message}
        </div>
      )
    }

    return <SkillsList skills={people[0].skills} />
  }
}

const SkillsQuery = gql`
  query userSkills {
    people(id: 1) {
      firstName
      lastName
      skills {
        id
        name
      }
    }
  }
`

export default graphql(SkillsQuery)(SkillsListContainer)
