import React, { PureComponent } from 'react'
import Styled from 'styled-components'

const Skill = Styled.div`
  color: black;
  background-color: yellow;
`

class SkillsList extends PureComponent {
  render () {
    return this.props.skills.map(skill => (
      <Skill key={skill.id}>{skill.name}</Skill>
    ))
  }
}

export default SkillsList
