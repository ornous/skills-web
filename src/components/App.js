import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

import { media } from 'utils/style'

import SkillsList from 'components/SkillsListContainer'
import UsersPage from 'components/UsersPage'

class App extends PureComponent {
  render () {
    return (
      <Router>
        <Wrapper>
          <Header>
            <Link to='/'>
              <RotatingLogo src={logo} className='App-logo' alt='logo' />
            </Link>
          </Header>
          <LeftSideBar>
            <h3>To the left (bis)</h3>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
            </ul>
          </LeftSideBar>
          <Main>
            <Route
              exact
              path='/'
              render={() => (
                <div>
                  <Intro>A very thoughtful intro lies here</Intro>
                  Ozzy's Skills: <SkillsList />
                </div>
              )}
            />
            <Route
              path='/about'
              render={() => <Intro>This says something about us.</Intro>}
            />
            <Route path='/users' component={UsersPage} />
          </Main>
          <Footer>
            <p>
              I am usually at the bottom of the page linking to things no one
              cares about until they do. I am an unsung here that most hate In
              football, I am more common than a header What am I?
            </p>
          </Footer>
        </Wrapper>
      </Router>
    )
  }
}

const Wrapper = styled.div`
  max-width: 940px;
  margin: 0 auto;
  display: grid;
  grid-template: 'head head' 'nav  main' 'nav  foot';
  grid-template-columns: 180px 1fr;
  grid-template-rows: 150px 1fr 150px;
  grid-gap: 10px;
  height: 100vh;
  width: 100vw;
  ${media.phone`
    grid-gap: 0;
    grid-template: 'head' 'nav' 'main' 'foot';
    grid-template-rows: 40px 50px 1fr 80px;
  `};
`

const LeftSideBar = styled.div`
  background-color: palevioletred;
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

const Main = styled.div`
  background-color: lightblue;
  padding: 10px;
  grid-area: main;
`

const Logo = styled.img`
  height: 40px;
  line-height: 40px;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const RotatingLogo = Logo.extend`
  animation: ${rotate360} infinite 20s linear;
`

const Header = styled.div`
  overflow: hidden;
  background-color: #222;
  padding: 20px;
  ${media.phone`
    padding: 0;
  `};
  color: white;
  grid-area: head;
  line-height: 100%;
  vertical-align: middle;
  text-align: center;
`

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
  background-color: tomato;
`

const Intro = styled.p`
  font-size: large;
  text-align: center;
`

export default App
