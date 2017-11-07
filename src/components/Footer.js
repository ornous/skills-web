import styled from 'styled-components'
import { media } from 'utils/style'

const Footer = styled.div`
  grid-area: foot;
  padding: 10px;
  ${media.phone`
    padding: 5px;
  `};
  p {
    padding: 0;
    margin: 0;
  }
  vertical-align: middle;
`

export default Footer
