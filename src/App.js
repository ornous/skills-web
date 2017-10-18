import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

import SkillsList from './components/SkillsListContainer'
import UsersPage from './components/UsersPage'

class App extends Component {
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
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
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
  grid-template-rows: 150px auto 150px;
  grid-gap: 10px;
  height: 100vh;
  width: 100vw;
`

const LeftSideBar = styled.div`
  background-color: palevioletred;
  grid-area: nav;
  padding: 10px;
`

const Main = styled.div`
  background-color: lightblue;
  padding: 10px;
  grid-area: main;
`

const Logo = styled.img`height: 80px;`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const RotatingLogo = Logo.extend`animation: ${rotate360} infinite 20s linear;`

const Header = styled.span`
  background-color: #222;
  padding: 20px;
  color: white;
  grid-area: head;
  line-height: 100%;
  vertical-align: middle;
  text-align: center;
`

const Footer = styled.div`
  grid-area: foot;
  padding: 10px;
  vertical-align: middle;
  background-color: tomato;
`

const Intro = styled.p`
  font-size: large;
  text-align: center;
`

export default App
