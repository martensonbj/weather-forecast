import React, { Component } from 'react'
import NewCityForm from '../containers/NewCityForm'

class DisplayCity extends Component {
  constructor() {
    super()
    this.state = { editing: false, display: false }
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing, display: !this.state.display })
  }

  render () {
    const { index, city } = this.props

    const displayStyle = {
      "display": this.state.editing? 'none' : 'inline'
    }

    return (
      <div className="DisplayCity">
        <h2 onClick={(e) => this.toggleEdit(e)}>{this.state.editing ? <NewCityForm index={index}/> : city }</h2>
        <p style={displayStyle} className="edit" onClick={(e) => this.toggleEdit(e)}>
          {this.state.editing ? '' : 'Edit' }
         </p>
      </div>
    )
  }
}

export default DisplayCity
