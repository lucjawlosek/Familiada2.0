import React, { Component } from 'react'
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/lib/ToggleButton'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'

import questions from '../questions'

import './AnswerBoard.css'

class AnswerBoard extends Component {
  constructor (props) {
    super(props)

    this.renderAnswer = this.renderAnswer.bind(this)
  }

  renderAnswer (answer, index) {
    return <ToggleButton value={index} key={answer.answer + index}><span>{answer.answer}</span> <span>{answer.score}pkt</span></ToggleButton>
  }

  render () {
    const {selectedQuestion, onBadAnswer, onSelectionChange} = this.props
    const selectedQuestionItem = questions.find(question => question.id === selectedQuestion)

    if(selectedQuestion < 1 || selectedQuestionItem === undefined) {
      return <div className="QuestionPlaceholder">Please Select Question</div>
    }

    return (
      <div className="AnswersContainer">
        <ButtonToolbar>
          <ToggleButtonGroup type="checkbox" vertical={true} defaultValue={[]} onChange={onSelectionChange}>
            {selectedQuestionItem.answers.map(this.renderAnswer)}
          </ToggleButtonGroup>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="danger" onClick={onBadAnswer}>Zła odpowiedź</Button>
        </ButtonToolbar>

      </div>
    )
  }
}

export default AnswerBoard