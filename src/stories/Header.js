import React from 'react'
import { storiesOf } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds'
import { withScreenshot } from 'storybook-chrome-screenshot'
import Header from 'components/Header'

storiesOf('Header', module)
  .addDecorator(
    backgrounds([{ name: 'primary', value: '#03a9f4', default: true }])
  )
  .addDecorator(
    withScreenshot({
      viewport: { width: 400, height: 250 }
    })
  )
  .add('with title', () => <Header>Title</Header>)
