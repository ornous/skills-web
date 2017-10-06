import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class SkillsList extends Component {
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

    const _renderedSkills = skills.map(skill => (
      <div key={skill.id}>{skill.name}</div>
    ))
    return <div className='SkillsList'>{_renderedSkills}</div>
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

export default graphql(SkillsQuery)(SkillsList)
