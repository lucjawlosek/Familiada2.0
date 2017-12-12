import React, { Component } from 'react'
import BoardContainer from '../BoardContainer/BoardContainer'

class SplashScreen extends Component {
  render () {
    const Header = {
      width: '100vw',
      textAlign: 'center'
    }
    const Div1 = {
      paddingTop: '20px',
      fontSize: '50px'
    }
    const Div2 = {
      paddingTop: '20px',
      fontSize: '40px'
    }
    return (
      <BoardContainer>
        <div style={Header}>
          <div style={Div1}>F A M I L I A D A</div>
          <div style={Div2}>edycja: Sagitonowa Wigilia</div>
        </div>
      </BoardContainer>
    )
  }
}

export default SplashScreen
