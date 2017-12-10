import React, { Component } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import SplashScreen from '../SplashScreen/SplashScreen'
import './ScoreBoard.css'

class ScoreBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWindowPortal: false,
    }
  }

  render() {

    const {started = false} = this.props

    if(!started) {
        return <SplashScreen />
    }

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
        </Row>

        <Row>
          <Col xs={12}>
          </Col>
          <Col xs={12}>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ScoreBoard
