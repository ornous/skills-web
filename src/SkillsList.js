import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class SkillsList extends Component {
  render() {
		if (this.props.data.loading) {
			return (<div>Loading...</div>)
		}
    const skills = this.props.data.people[0].skills

    const _renderedSkills = skills.map(skill => (<div key={skill.id}>{skill.name}</div>))
    return (
      <div className="SkillsList">
        {_renderedSkills}
      </div>
    );
  }
}

const SkillsQuery = gql`query userSkills {
  people(id: 1) {
    skills {
      id
      name
    }
  }
}`

export default graphql(SkillsQuery)(SkillsList)
