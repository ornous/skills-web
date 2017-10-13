import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

import SkillsList from './containers/SkillsList'

const Wrapper = styled.div`text-align: center;`

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

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Intro = styled.p`font-size: large;`

/**
 * Inject features:
 * - react-router
 * - add page abstraction
 * - add helmet
 * - switch to styled-components
 */
class App extends Component {
  render () {
    return (
      <Wrapper>
        <Header>
          <RotatingLogo src={logo} className='App-logo' alt='logo' />
        </Header>
        <Intro>A very thoughtful intro lies here</Intro>
        Ozzy's Skills: <SkillsList />
      </Wrapper>
    )
  }
}

export default App
