/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable comma-dangle */
import React from 'react'
import { storiesOf } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds'
import { withScreenshot } from 'storybook-chrome-screenshot'
import Heading from 'components/Heading'

storiesOf('Heading', module)
  .addDecorator(
    backgrounds([{ name: 'primary', value: '#03a9f4', default: true }])
  )
  .addDecorator(
    withScreenshot({
      viewport: {
        width: 400,
        height: 250
      }
    })
  )
  .add('with title', () => <Heading>Title</Heading>)
  .add('with subtitle', () => (
    <Heading>
      Title
      <small>Sub title</small>
    </Heading>
  ))
