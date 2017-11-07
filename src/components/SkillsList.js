import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

class SkillsList extends PureComponent {
  render () {
    return (
      <List celled horizontal>
        {this.props.skills.map(skill => (
          <List.Item key={skill.id}>{skill.name}</List.Item>
        ))}
      </List>
    )
  }
}

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default SkillsList
