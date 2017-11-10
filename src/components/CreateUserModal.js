import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import CreateUserForm from 'containers/CreateUserForm'

const CreateUserModal = () => (
  <Modal
    size='small'
    trigger={
      <Button icon labelPosition='left' primary size='small'>
        <Icon name='user' /> Add User
      </Button>
    }
  >
    <Modal.Header>Create a new user</Modal.Header>
    <Modal.Content>
      <CreateUserForm />
    </Modal.Content>
  </Modal>
)

export default CreateUserModal
