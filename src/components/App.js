import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import logo from './logo.svg'
import { CSSTransitionGroup } from 'react-transition-group'

import SkillsList from 'containers/SkillsList'
import UsersPage from 'components/UsersPage'
import Header from 'components/Header'
import { RotatingLogo as Logo } from 'components/Logo'
import Footer from 'components/Footer'
import Wrapper from 'components/Wrapper'
import NavLink from 'components/NavLink'
import theme from '../themes/default'

import 'semantic-ui-css/semantic.min.css'
import '../index.css'

class App extends PureComponent {
  render () {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Header>
              <Link to='/'>
                <Logo src={logo} className='App-logo' alt='logo' />
              </Link>
              <nav role='navigation'>
                <ul>
                  <li>
                    <NavLink exact to='/'>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/users'>Users</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about'>About Us</NavLink>
                  </li>
                </ul>
              </nav>
            </Header>
            <Main>
              <CSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
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
              </CSSTransitionGroup>
            </Main>
            <Footer>
              <ul>
                <li>
                  I am usually at the bottom of the page linking to things no
                  one cares about until they do.
                </li>
                <li>I am an unsung here that most hate</li>
                <li>In football, I am more common than a header</li>
              </ul>
              <p>What am I?</p>
            </Footer>
          </Wrapper>
        </ThemeProvider>
      </Router>
    )
  }
}

const Main = styled.div`
  background-color: ${props => props.theme.fourth};
  padding: 10px;
  grid-area: main;
`

const Intro = styled.p`
  font-size: large;
  text-align: center;
`

export default App
