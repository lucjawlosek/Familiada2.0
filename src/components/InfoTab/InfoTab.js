import React, { Component } from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'

import './InfoTab.css'

class InfoTab extends Component {
  render () {
    const { onStart, gameState, taken = false, player} = this.props

    return (
      <Row className='InfoTabContainer'>
        <Col xs={12} md={4}>
          <Button bsStyle="success" onClick={onStart}>Start</Button>
        </Col>
        <Col xs={12} md={4}>
          { gameState === 'pending' ? '<- Rozpocznij grę i wybierz pytanie!' : ''}
          { gameState === '1on1' ? '1 na 1' : ''}
          { gameState === 'team' ? 'Drużyna' : ''}
        </Col>
        {
          gameState !== 'pending' ?
            <Col xs={6} md={2}>
              Odpowiada: { player === 'blue' ? <span className='BlueTeam'>Drużyna Niebieska</span> : <span className='RedTeam'>Drużyna Czerwona</span>}
            </Col>
            :
            <Col xs={6} md={2}>
              Odpowiada: <span>&nbsp;</span>
            </Col>
        }
        {
          gameState !== 'pending' ?
            <Col xs={6} md={2}>
              Przejęte: { taken ? <span>Tak</span> : <span>Nie</span>}
            </Col>
            :
            <Col xs={6} md={2}>
              Przejęte: <span>&nbsp;</span>
            </Col>
        }
      </Row>
    )
  }
}

export default InfoTab
