import styled from 'styled-components'
import { media } from 'utils/style'

const LeftSideBar = styled.div`
  background-color: ${props => props.theme.fourth};
  grid-area: nav;
  padding: 10px;
  ${media.phone`
    padding: 0;
    h3 {
      display: none;
    }
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      li {
        flex-grow: 1;
        flex-basis: 0;
        list-style-type: none;
        background-color: pink;
        border-left: 1px solid #fff;
        border-right: 1px solid #ccc;
        text-align: center;
        a {
          text-decoration: none;
          height: 50px;
          line-height: 50px;
        }
      }
    }
  `};
`

export default LeftSideBar
