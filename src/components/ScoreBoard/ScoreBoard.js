import React, { Component } from 'react'

import questions from '../questions'

import SplashScreen from './SplashScreen/SplashScreen'
import BoardContainer from './BoardContainer/BoardContainer'
import UserAnswers from './UserAnswers/UserAnswers'
import WarningList from './WarningList/WarningList'
import './ScoreBoard.css'

class ScoreBoard extends Component {
  render () {
    const { blueTeamScore, redTeamScore, selectedQuestion, selectedAnswers, badAnswers, player, multiplier } = this.props
    if (selectedQuestion === -1) {
      return <SplashScreen />
    }

    const Header = {
      width: '100vw',
      textAlign: 'center',
      fontSize: '6vh',
      paddingTop: '2vw'
    }

    const Body = {
      width: '100vw',
      minHeight: '45vh',
      display: 'flex',
      flexDirection: 'row',
      paddingTop: '1vw'
    }

    const Footer = {
      width: '96vw',
      fontSize: '6vh',
      paddingTop: '6vw',
      paddingLeft: '2vw',
      paddingRight: '2vw',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }

    const currentScore = questions.find(question => question.id === selectedQuestion).answers.filter((answer, index) => selectedAnswers.includes(index)).reduce((acc, answer) => acc + answer.score, 0)
    const playerWithWarnings = badAnswers !== 3 ? player : (player === 'red' ? 'blue' : 'red')

    return (
      <BoardContainer>
        <div style={Header}>
          {currentScore * multiplier + ''}
        </div>
        <div style={Body}>
          <WarningList badAnswers={!player ? 0 : (playerWithWarnings === 'red' ? (badAnswers < 4 ? badAnswers : 3) : (badAnswers > 3 ? badAnswers : 0))} />
          <UserAnswers selectedAnswers={selectedAnswers} selectedQuestion={selectedQuestion} currentScore={currentScore} />
          <WarningList badAnswers={!player ? 0 : (playerWithWarnings === 'blue' ? (badAnswers < 4 ? badAnswers : 3) : (badAnswers > 3 ? badAnswers : 0))} />
        </div>
        <div style={Footer}>
          <span>{redTeamScore}</span>
          <span>{blueTeamScore}</span>
        </div>
      </BoardContainer>
    )
  }
}

export default ScoreBoard
