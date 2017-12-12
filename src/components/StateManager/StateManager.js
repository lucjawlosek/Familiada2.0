import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

import questions from '../questions'

import './StateManager.css'

class StateManager extends Component {
  constructor (props) {
    super(props)

    this.cashOut = this.cashOut.bind(this)
  }

  cashOut () {
    const {selectedAnswers, selectedQuestion, onCashPlayer} = this.props
    onCashPlayer(questions.find(question => question.id === selectedQuestion).answers.filter((answer, index) => selectedAnswers.includes(index)).reduce((acc, answer) => acc + answer.score, 0))
  }

  render () {
    const {onFinishGame, cashedOut, selectedQuestion} = this.props
    return (
      <div className="StateContainer">
        <ButtonToolbar>
          <Button bsStyle="success" bsSize="large" onClick={this.cashOut} disabled={cashedOut || selectedQuestion === -1}><Glyphicon glyph="eur" />&nbsp;Wypłać</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="danger" bsSize="large" onClick={onFinishGame}><Glyphicon glyph="remove" />&nbsp;Koniec Gry</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default StateManager
