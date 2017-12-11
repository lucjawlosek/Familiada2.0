import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'

import questions from '../questions'

import './QuestionBoard.css'

class QuestionBoard extends Component {
  constructor (props) {
    super(props)

    this.renderQuestion = this.renderQuestion.bind(this)
  }

  renderQuestion (question, index) {
    const {selectedQuestion, onSelectQuestion} = this.props
    return <ListGroupItem onClick={() => onSelectQuestion(question.id)} key={question.id + index} active={selectedQuestion === question.id}>{question.question}</ListGroupItem>
  }

  render () {
    const {onTeamChange} = this.props
    return (
      <div className="StateContainer">
        <ButtonToolbar>
          <Button bsStyle="danger" onClick={() => onTeamChange('red')}>Gra Drużyna Czerwona</Button>
          <Button bsStyle="primary" onClick={() => onTeamChange('blue')}>Gra Drużyna Niebieska</Button>
        </ButtonToolbar>
        <ListGroup>
          {questions.map(this.renderQuestion)}
        </ListGroup>
      </div>
    )
  }
}

export default QuestionBoard