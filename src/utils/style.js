import { css } from 'styled-components'

export const keyViewports = {
  phone: {
    width: 300,
    height: 420,
    isMobile: true,
    hasTouch: true
  },
  tablet: {
    width: 768,
    height: 800,
    isMobile: true,
    hasTouch: true
  },
  desktop: {
    width: 1024,
    height: 768,
    isMobile: false,
    hasTouch: false
  }
}

export const media = Object.keys(keyViewports).reduce((acc, viewport) => {
  const emSize = keyViewports[viewport].width / 16
  acc[viewport] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(args)};
    }
  `
  return acc
}, {})
