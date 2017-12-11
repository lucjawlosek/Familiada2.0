import React, { Component } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import BoardPortal from '../BoardPortal/BoardPortal'
import ScoreBoard from '../ScoreBoard/ScoreBoard'
import InfoTab from '../InfoTab/InfoTab'
import Multiplier from '../Multiplier/Multiplier'
import StateManager from '../StateManager/StateManager'
import QuestionBoard from '../QuestionBoard/QuestionBoard'
import AnswerBoard from '../AnswerBoard/AnswerBoard'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showWindowPortal: false,
      taken: false,
      player: '',
      gameState: 'pending',
      blueTeamScore: 0,
      redTeamScore: 0,
      currentScore: 0,
      selectedQuestion: 0,
      currentMultiplier: 1,
      gameStarted: false
    }

    this.openWindowPortal = this.openWindowPortal.bind(this)
    this.cashToPlayer = this.cashToPlayer.bind(this)
    this.finishGame = this.finishGame.bind(this)
    this.changeMultiplier = this.changeMultiplier.bind(this)
    this.selectQuestion = this.selectQuestion.bind(this)
    this.changeTeam = this.changeTeam.bind(this)
    this.selectAnswer = this.selectAnswer.bind(this)
    this.badAnswer = this.badAnswer.bind(this)
  }

  openWindowPortal () {
    this.setState(state => ({
      ...state,
      showWindowPortal: true
    }))
  }

  cashToPlayer () {
    const {player} = this.state
    const extraScore = this.state.currentScore * this.state.currentMultiplier
    this.setState(state => ({
      ...state,
      blueTeamScore: player === 'blue' ? state.blueTeamScore + extraScore : state.blueTeamScore,
      redTeamScore: player === 'red' ? state.redTeamScore + extraScore : state.redTeamScore
    }))
  }

  finishGame () {
    this.setState(state => ({
      ...state,
      showWindowPortal: false
    }))
  }

  changeMultiplier (newMultiplier) {
    this.setState(state => ({
      ...state,
      currentMultiplier: newMultiplier
    }))
  }

  selectQuestion (selectedQuestionId) {
    this.setState(state => ({
      ...state,
      selectedQuestion: selectedQuestionId,
      gameStarted: true,
      gameState: '1on1'
    }))
  }

  changeTeam (team) {
    this.setState(state => ({
      ...state,
      player: team
    }))
  }

  selectAnswer (selectedAnswers) {
    this.setState(state => ({
      ...state,
      selectedAnswers: selectedAnswers
    }))
  }

  badAnswer (team) {
    this.setState(state => ({
      ...state,
      player: team
    }))
  }

  render () {
    const {taken, player, gameState, selectedQuestion} = this.state
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} className='Header'>
            <div>Familiada</div>
            <div>edycja: Sagitonowa wigilia</div>
          </Col>
        </Row>

        <InfoTab onStart={this.openWindowPortal} gameState={gameState} taken={taken} player={player}/>

        <Row>
          <Col xs={12} md={4}>
            <Multiplier value={1} onChange={this.changeMultiplier} />
            <StateManager onCashPlayer={this.cashToPlayer} onFinishGame={this.finishGame} />
          </Col>
          <Col xs={12} md={4}>
            <QuestionBoard selectedQuestion={selectedQuestion} onSelectQuestion={this.selectQuestion} onTeamChange={this.changeTeam} />
          </Col>
          <Col xs={12} md={4}>
            <AnswerBoard selectedQuestion={selectedQuestion} onSelectionChange={this.selectAnswer} onBadAnswer={this.badAnswer} />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
          </Col>
        </Row>

        {this.state.showWindowPortal && (
          <BoardPortal>
            <ScoreBoard />
          </BoardPortal>
        )}
      </Grid>
    )
  }
}

export default App
