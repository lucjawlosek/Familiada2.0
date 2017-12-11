import React, { Component } from 'react'

import './SplashScreen.css'

class SplashScreen extends Component {
  render () {
    const Screen = {
      width: '100vw',
      height: '100vh',
      margin: '0',
      backgroundColor: 'black',
      color: 'yellow',
      fontFamily: 'Familiada Regular'
    }
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
      <div style={Screen}>
        <div style={Header}>
          <div style={Div1}>F A M I L I A D A</div>
          <div style={Div2}>edycja: Sagitonowa Wigilia</div>
        </div>
      </div>
    )
  }
}

export default SplashScreen
