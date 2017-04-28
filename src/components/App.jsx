import React, { Component } from 'react'
import Header from '../containers/Header'
import Footer from './Footer'

class App extends Component {

  componentDidMount() {
    this.getLocalCoords()
  }

  getLocalCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }

      this.props.setLocation(location)
    })
  }

  render() {
    return (
      <section className="Application">
        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </section>
    )
  }
}

export default App
