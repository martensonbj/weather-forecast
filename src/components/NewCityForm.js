import React, { Component } from 'react'

class NewCityForm extends Component {
  constructor() {
    super()
    this.state = { city: '' }
  }

  handleSubmit(e, setNewCity, index, handleEdit) {
    e.preventDefault()
    setNewCity(this.state.city.toLowerCase(), index)
    this.props.handleEdit()
  }

  render() {
    const { index, setNewCity } = this.props
    return (
      <form
        className="NewCityForm"
        onSubmit={(e) => this.handleSubmit(e, setNewCity, index)}
        onBlur={() => this.props.handleBlur()}
      >
        <input
          type="text"
          value={this.state.city}
          placeholder="Enter City"
          onChange={(e) => this.setState({ city: e.target.value })}
        />
      </form>
    )
  }
}

export default NewCityForm
