import React, { Component } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import BoardPortal from '../BoardPortal/BoardPortal'
import ScoreBoard from '../ScoreBoard/ScoreBoard'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWindowPortal: false,
    }

    this.toggleWindowPortal = this.toggleWindowPortal.bind(this)
  }

  toggleWindowPortal() {
    this.setState(state => ({
      ...state,
      showWindowPortal: !state.showWindowPortal,
    }))
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} className='Header'>
          <div>Familiada</div>
          <div>edycja: Sagitonowa wigilia</div>

          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
          </Col>
          <Col xs={12} md={4}>
          </Col>
          <Col xs={6} md={2}>
          </Col>
          <Col xs={6} md={2}>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
          </Col>
          <Col xs={12} md={4}>
          </Col>
          <Col xs={12} md={4}>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
          </Col>
        </Row>

        <button onClick={this.toggleWindowPortal}>
          {this.state.showWindowPortal ? 'Close the' : 'Open a'} Portal
        </button>
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
