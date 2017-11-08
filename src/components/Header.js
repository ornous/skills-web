import styled from 'styled-components'
import { media } from 'utils/style'

const Header = styled.div`
  grid-area: head;
  position: relative;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 1.5rem;
  line-height: 100%;
  vertical-align: middle;
  ${media.phone`
    padding: 0;
  `};

  nav {
    position: absolute;
    background-color: #1b293a;
    border: solid ${props => props.theme.secondary};
    border-width: 1px 0;
    width: 100%;
    bottom: 0;
    left: 0;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        flex: 1 1 10px;
        text-align: center;

        a {
          display: block;
          width: 100%;
          height: 100%;
          padding: 5px;
          color: ${props => props.theme.body.background};

          &:hover {
            background-color: ${props => props.theme.secondary};
          }

          &.active {
            background-color: ${props => props.theme.secondary};
          }
        }
      }
    }
  }
`
export default Header
