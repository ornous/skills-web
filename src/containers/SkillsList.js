import React, { Component } from 'react'
import SkillsList from '../components/SkillsList'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class SkillsListContainer extends Component {
  render () {
    const { loading, error } = this.props.data
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
    const skills = this.props.data.people[0].skills
    return <SkillsList skills={skills} />
  }
}

const SkillsQuery = gql`
  query userSkills {
    people(id: 1) {
      skills {
        id
        name
      }
    }
  }
`

export default graphql(SkillsQuery)(SkillsListContainer)
