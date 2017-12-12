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

import correct from './1-dobra_odpowiedz.ogg'
import wrong from './2-utrata.ogg'
import start from './3-start.ogg'
import end from './4-koniec.ogg'
import questionChange from './5-przerwa.ogg'

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
      selectedQuestion: -1,
      currentMultiplier: 1,
      badAnswers: 0,
      gameStarted: false,
      cashedOut: false,
      finished: false,
      started: false
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
      showWindowPortal: true,
      cashedOut: false,
      gameStarted: true,
      gameState: '1on1',
      selectedAnswers: [],
      badAnswers: 0,
      taken: false
    }))
  }

  cashToPlayer (value) {
    const {player, cashedOut} = this.state
    const extraScore = value * this.state.currentMultiplier
    if(!cashedOut) {
      this.setState(state => ({
        ...state,
        cashedOut: true,
        blueTeamScore: player === 'blue' ? state.blueTeamScore + extraScore : state.blueTeamScore,
        redTeamScore: player === 'red' ? state.redTeamScore + extraScore : state.redTeamScore
      }))
    }
  }

  finishGame () {
    this.setState(state => ({
      ...state,
      showWindowPortal: false,
      finished: true
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
      started: true,
      cashedOut: false,
      selectedQuestion: selectedQuestionId,
      gameStarted: true,
      gameState: '1on1',
      player: '',
      selectedAnswers: [],
      badAnswers: 0,
      taken: false
    }))
  }

  changeTeam (team) {
    this.setState(state => ({
      ...state,
      player: team,
      badAnswers: 0
    }))
  }

  selectAnswer (selectedAnswers) {
    this.setState(state => ({
      ...state,
      selectedAnswers: selectedAnswers,
      gameState: 'team'
    }))
  }

  badAnswer () {
    const newPlayer = this.state.player === 'red' ? 'blue' : 'red'
    if(!this.state.player) {
      this.setState(state => ({
        ...state,
        badAnswers: state.badAnswers + 1
      }))
    } else {
      this.setState(state => ({
        ...state,
        badAnswers: state.badAnswers <= 3 ? state.badAnswers + 1 : state.badAnswers,
        taken: state.badAnswers >= 2,
        player: state.badAnswers === 3 || state.badAnswers === 2 ? newPlayer : state.player
      }))
    }
  }

  render () {
    const {taken, player, gameState, selectedQuestion, selectedAnswers, blueTeamScore, redTeamScore, cashedOut, badAnswers, currentMultiplier, showWindowPortal, finished, started} = this.state
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
            <StateManager onCashPlayer={this.cashToPlayer} onFinishGame={this.finishGame} cashedOut={cashedOut} selectedAnswers={selectedAnswers} selectedQuestion={selectedQuestion}/>
          </Col>
          <Col xs={12} md={4}>
            <QuestionBoard selectedQuestion={selectedQuestion} onSelectQuestion={this.selectQuestion} onTeamChange={this.changeTeam} blueTeamScore={blueTeamScore} redTeamScore={redTeamScore} />
          </Col>
          <Col xs={12} md={4}>
            <AnswerBoard value={selectedAnswers} selectedQuestion={selectedQuestion} onSelectionChange={this.selectAnswer} onBadAnswer={this.badAnswer} />
          </Col>
        </Row>

        {
          started
            ? <audio autoPlay>
              <source src={start}/>
            </audio>
            : null
        }
        {
          finished
            ? <audio autoPlay>
            <source src={end}/>
          </audio>
            : null
        }
        {
          new Array(badAnswers).fill(1).map((value, index) => <audio key={index} autoPlay>
            <source src={wrong}/>
          </audio>)
        }
        {
          selectedAnswers
            ? selectedAnswers.map((value, index) => <audio key={index} autoPlay>
                <source src={correct}/>
              </audio>)
             : null
        }
        {
          cashedOut
            ? <audio autoPlay>
            <source src={questionChange}/>
          </audio>
            : null
        }

        {showWindowPortal && (
          <BoardPortal>
            <ScoreBoard
              blueTeamScore={blueTeamScore}
              redTeamScore={redTeamScore}
              selectedQuestion={selectedQuestion}
              selectedAnswers={selectedAnswers}
              badAnswers={badAnswers}
              player={player}
              gameState={gameState}
              multiplier={currentMultiplier}
            />
          </BoardPortal>
        )}
      </Grid>
    )
  }
}

export default App
