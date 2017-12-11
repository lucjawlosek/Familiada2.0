import React, { Component } from 'react'

import questions from '../../questions'

class UserAnswers extends Component {
  render () {
    const {selectedQuestion, selectedAnswers, currentScore} = this.props
    const Container = {
      width: '60vw',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }
    const Answer = {
      paddingTop: '2vh',
      width: '100%',
      fontSize: '5vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      whiteSpace: 'nowrap'
    }
    const AnswerText = {
      width: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
      textAlign: 'left',
      marginRight: '1vw'
    }
    const AnswerIndex = {
      marginRight: '1vw',
      width: '5%'
    }
    const AnswerScore = {
      width: '10%',
      overflow: 'hidden'
    }
    const ScoreContainer = {
      paddingTop: '4vh',
      width: '50%',
      fontSize: '5vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
    const currentQuestion = questions.find(question => question.id === selectedQuestion)
    return (
      <div style={Container}>
        { currentQuestion.answers.map((answer, index) =>
          <div
            key={index}
            style={Answer}>
            <span style={AnswerIndex}>{index + 1}</span>
            <span style={AnswerText}>
              { selectedAnswers.includes(index) ? answer.answer : '____________________________________' }
            </span>
            <span style={AnswerScore}>{ selectedAnswers.includes(index) ? answer.score : '__' }</span>
          </div>)}
          <div style={ScoreContainer}>
            <span>Suma:</span>
            <span>{currentScore}</span>
          </div>
      </div>
    )
  }
}

export default UserAnswers
