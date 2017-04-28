import React, { Component } from 'react'
import NewCityForm from '../containers/NewCityForm'

class DisplayCity extends Component {
  constructor() {
    super()
    this.state = { editing: false }
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing })
  }

  toggleText(index, city) {
    return this.state.editing || city === 'default'?
      <NewCityForm
        index={index}
        handleEdit={() => this.toggleEdit()}
        handleBlur={() => this.setState({ editing: false })}
      /> :
      <h2 onClick={() => this.toggleEdit()}>
        { city }
      </h2>
  }

  render() {
    const { index, city } = this.props

    const displayStyle = {
      display: this.state.editing || city === 'default' ? 'none' : 'inline'
    }

    return (
      <div className="DisplayCity">
        { this.toggleText(index, city) }
        <p
          style={displayStyle}
          className="edit"
          onClick={(e) => this.toggleEdit(e)}>
          { this.state.editing ? '' : 'Edit' }
        </p>
      </div>
    )
  }
}

export default DisplayCity
