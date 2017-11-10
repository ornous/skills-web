import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class CreateUserForm extends Component {
  constructor (props) {
    super(props)
    this.state = { firstName: '', lastName: '', email: '', password: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit () {
    const { firstName, lastName, email, password } = this.state

    console.log(this.props.createUser(firstName, lastName, email, password))
  }

  render () {
    const { firstName, lastName, email, password } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            name='firstName'
            label='First name'
            placeholder='First name'
            onChange={this.handleChange}
            value={firstName}
          />
          <Form.Input
            name='lastName'
            label='Last name'
            placeholder='Last name'
            onChange={this.handleChange}
            value={lastName}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            name='email'
            label='Email'
            placeholder='Email Address'
            onChange={this.handleChange}
            value={email}
          />
          <Form.Input
            type='password'
            name='password'
            label='Password'
            onChange={this.handleChange}
            value={password}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default CreateUserForm
