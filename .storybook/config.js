import { configure } from '@storybook/react'
import { setScreenshotOptions } from 'storybook-chrome-screenshot'

const req = require.context('../src/stories', true, /[A-Z]{1}.*\.js$/)

function loadStories () {
  req.keys().forEach(story => req(story))
}

configure(loadStories, module)

setScreenshotOptions({
  viewport: {
    width: 768,
    height: 400,
    deviceScaleFactor: 2
  }
})
