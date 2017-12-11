import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

import './StateManager.css'

class StateManager extends Component {
  render () {
    const {onCashPlayer, onFinishGame} = this.props
    return (
      <div className="StateContainer">
        <ButtonToolbar>
          <Button bsStyle="success" bsSize="large" onClick={onCashPlayer}><Glyphicon glyph="eur" />&nbsp;Wypłać</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="danger" bsSize="large" onClick={onFinishGame}><Glyphicon glyph="remove" />&nbsp;Koniec Gry</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default StateManager
