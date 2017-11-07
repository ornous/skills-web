import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Segment, Loader } from 'semantic-ui-react'
import SkillsList from 'components/SkillsList'

class SkillsListContainer extends Component {
  render () {
    const { loading, error, people } = this.props.data
    if (loading) {
      return (
        <Segment>
          <Loader active />

          <div>Loading your skills...</div>
        </Segment>
      )
    }

    if (error) {
      return (
        <Segment>
          Failed to fetch your skills<br />
          {error.message}
        </Segment>
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
