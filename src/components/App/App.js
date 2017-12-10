import React, { Component } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import logo from './logo.svg'

import BoardPortal from '../BoardPortal/BoardPortal'
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
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}><code> Coś </code></Col>
          <Col xs={6} md={4}><code> Coś tam</code></Col>
        </Row>
        <button onClick={this.toggleWindowPortal}>
          {this.state.showWindowPortal ? 'Close the' : 'Open a'} Portal
        </button>
        {this.state.showWindowPortal && (
          <BoardPortal>
            <p>Board</p>
          </BoardPortal>
        )}
      </Grid>
    )
  }
}

export default App
