import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import SkillsList from 'components/SkillsList'

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

    if (!people || !people[0] || !people[0].skills) {
      return 'Unable to find skills for user'
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
