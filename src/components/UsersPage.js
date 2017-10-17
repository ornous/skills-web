import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import UsersList from './UsersListContainer'
import UsersProfile from './UsersProfileContainer'

class UsersPage extends Component {
  render () {
    return (
      <Switch>
        <Route exact path={this.props.match.url} component={UsersList} />
        <Route
          path={`${this.props.match.url}/:userId`}
          component={UsersProfile}
        />
      </Switch>
    )
  }
}

export default UsersPage
