import React from 'react'
import { storiesOf } from '@storybook/react'
import { withScreenshot } from 'storybook-chrome-screenshot'
import Container from 'components/Container'
import { keyViewports } from 'utils/style'

storiesOf('Container', module)
  .add(
    'with single viewport',
    withScreenshot({
      viewport: {}
    })(() => <Container>Single Viewport</Container>)
  )
  .add(
    'with multiple viewport',
    withScreenshot({
      viewport: Object.values(keyViewports)
    })(() => <Container>Multiple Viewport</Container>)
  )
