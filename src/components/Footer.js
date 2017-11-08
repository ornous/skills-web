import styled from 'styled-components'
import { media } from 'utils/style'

const Footer = styled.div`
  grid-area: foot;
  padding: 10px;
  vertical-align: middle;
  ${media.phone`
    padding: 5px;
  `};

  p {
    padding: 0;
    margin: 0;
  }
`

export default Footer
