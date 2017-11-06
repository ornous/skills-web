import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import UsersList from 'containers/UsersList'
import UsersProfile from 'containers/UsersProfile'

class UsersPage extends PureComponent {
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
