import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const Logo = styled.img`
  display: block;
  width: 40px;
  margin: 0 auto;
  line-height: 40px;
`

export const RotatingLogo = Logo.extend`
  animation: ${rotate360} infinite 20s linear;
`

export default Logo
