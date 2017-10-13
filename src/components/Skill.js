import React, { Component } from 'react'

class Skills extends Component {
  render () {
    return <div key={this.props.id}>{this.props.name}</div>
  }
}

export default Skills
