import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'

import CreateUserModal from 'components/CreateUserModal'

class UsersList extends Component {
  constructor (props) {
    super(props)
    this.state = { page: 1 }
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange (event, data) {
    let newPage
    if (event.target.dataset.page === 'prev') {
      newPage = this.state.page - 1
    } else if (event.target.dataset.page === 'next') {
      newPage = this.state.page + 1
    } else {
      newPage = parseInt(event.target.dataset.page, 10)
    }

    this.setState({ page: newPage })
  }

  render () {
    let page = this.state.page
    const perPage = 15
    const users = this.props.users.slice((page - 1) * perPage, page * perPage)
    const pageCount = Math.ceil(this.props.users.length / perPage)
    const pages = []
    pages.push(
      <Menu.Item
        as='a'
        key='prev'
        data-page='prev'
        onClick={this.handlePageChange}
        icon
        disabled={page === 1}
      >
        <Icon name='left chevron' />
      </Menu.Item>
    )

    for (let index = 0; index < pageCount; ++index) {
      pages.push(
        <Menu.Item
          as='a'
          key={index}
          data-page={index + 1}
          onClick={this.handlePageChange}
          active={this.state.page === index + 1}
        >
          {index + 1}
        </Menu.Item>
      )
    }
    pages.push(
      <Menu.Item
        as='a'
        key='next'
        data-page='next'
        onClick={this.handlePageChange}
        icon
        disabled={page === pageCount}
      >
        <Icon name='right chevron' />
      </Menu.Item>
    )

    return (
      <div>
        <Table striped color='teal'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>E-mail address</Table.HeaderCell>
              <Table.HeaderCell>Registration Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map(user => (
              <Table.Row key={user.id}>
                <Table.Cell>
                  {user.email === 'snekshaark@gmail.com' && (
                    <Label ribbon>you</Label>
                  )}
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
                <CreateUserModal />
                <Menu floated='right' pagination>
                  {pages}
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
