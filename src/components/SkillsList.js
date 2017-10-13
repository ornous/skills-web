import React, { Component } from 'react'
import Skill from './Skill'

class SkillsList extends Component {
  render () {
    return this.props.skills.map(skill => <Skill {...skill} />)
  }
}

export default SkillsList
