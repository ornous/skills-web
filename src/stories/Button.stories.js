import React from 'react'
import { storiesOf } from '@storybook/react'
import { withScreenshot } from 'storybook-chrome-screenshot'
import Button from 'components/Button'

storiesOf('Button', module)
  .add('with text', withScreenshot()(() => <Button>Default</Button>))
  .add(
    'with primary',
    withScreenshot({
      viewport: {
        width: 400,
        height: 250
      }
    })(() => <Button primary>Primary</Button>)
  )
  .add('with not capture button', () => <Button>Not Capture</Button>)
