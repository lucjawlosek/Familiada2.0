import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/lib/ToggleButton'

import './Multiplier.css'

class Multiplier extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (value) {
    this.props.onChange(value)
  }

  render () {
    return (
      <ButtonToolbar className='MultiplierContainer'>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1} vertical onChange={this.handleChange}>
          <ToggleButton value={1}>
            Mnożnik x1
          </ToggleButton>
          <ToggleButton value={2}>
            Mnożnik x2
          </ToggleButton>
          <ToggleButton value={3}>
            Mnożnik x3
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    )
  }
}

export default Multiplier
