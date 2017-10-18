import React, { Component } from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const User = Styled.div`
  color: palevioletred;
  margin: 5px;
`

class UsersList extends Component {
  render () {
    return this.props.users.map(user => (
      <User key={user.id}>
        <Link to={`/users/${user.id}`}>
          {user.firstName} {user.lastName}
        </Link>
        &lt;{user.email}&gt;
      </User>
    ))
  }
}

export default UsersList
