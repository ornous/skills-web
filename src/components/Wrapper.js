import styled, { keyframes } from 'styled-components'
import { media } from 'utils/style'

const fadeIn = keyframes`
  from {
    opacity: 0.3;
  }

  to {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template: 'head' 'main' 'foot';
  grid-template-columns: 1fr;
  grid-template-rows: 100px auto 120px;
  grid-row-gap: 0px;
  grid-column-gap: 10px;
  animation: ${fadeIn} 0.1s linear;
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.third};
  ${media.phone`
    grid-gap: 0;
    grid-template: 'head' 'nav' 'main' 'foot';
    grid-template-rows: 40px 50px 1fr 80px;
  `};
`

export default Wrapper
