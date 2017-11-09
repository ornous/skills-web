import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'

class UsersList extends Component {
  constructor (props) {
    super(props)
    this.state = { page: 1 }
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange (event, data) {
    console.log(data)
  }

  render () {
    let page = this.state.page
    const perPage = 15
    const users = this.props.users.slice((page - 1) * perPage, page * perPage)
    const pageCount = Math.ceil(this.props.users.length / perPage)
    const pages = []
    for (let index = 0; index < pageCount; ++index) {
      pages.push(
        <Menu.Item as='a' key={index} onClick={this.handlePageChange}>
          {index + 1}
        </Menu.Item>
      )
    }
    return (
      <div>
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>E-mail address</Table.HeaderCell>
              <Table.HeaderCell>Registration Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map(user => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>
                  <Link to={`/users/${user.id}`}>
                    {user.firstName} {user.lastName}
                  </Link>
                </Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  {moment(user.createdAt).format('MMMM Do YYYY, HH:mm')}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='4'>
                <Button icon labelPosition='left' primary size='small'>
                  <Icon name='user' /> Add User
                </Button>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='left chevron' />
                  </Menu.Item>
                  {pages}
                  <Menu.Item as='a' icon>
                    <Icon name='right chevron' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
    })
  ).isRequired
}

export default UsersList
