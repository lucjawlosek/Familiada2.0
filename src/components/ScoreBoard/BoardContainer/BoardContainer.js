import React, { Component } from 'react'

class BoardContainer extends Component {
  render () {
    const Screen = {
      width: '100vw',
      height: '100vh',
      margin: '0',
      backgroundColor: 'black',
      color: 'yellow',
      fontFamily: 'Familiada Regular'
    }
    const {children} = this.props
    return (
      <div style={Screen}>
        {children}
      </div>
    )
  }
}

export default BoardContainer
