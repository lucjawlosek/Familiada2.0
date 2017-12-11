import React, { Component } from 'react'

class WarningList extends Component {
  render () {
    const {badAnswers} = this.props
    const Container = {
      width: '20vw',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column'
    }
    const WrongAnswer = {
      paddingTop: '5vh',
      fontSize: '10vh'
    }
    const ErrorAnswer = {
      paddingTop: '15vh',
      fontSize: '20vh'
    }
    const tempArray = new Array(badAnswers > 3 ? 0 : badAnswers).fill(1)
    return (
      <div style={Container}>
        {
          tempArray.map((value, index) => <div key={index} style={WrongAnswer} >X</div>)
        }
        {
          badAnswers > 3 ? <div style={ErrorAnswer} >X</div> : ''
        }
      </div>
    )
  }
}

export default WarningList
