import React, { Component } from 'react';
import Header from '../containers/Header'
import Footer from './Footer'


class App extends Component {

  getLocalCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let long = position.coords.longitude
      let location = {
        latitude: lat,
        longitude: long,
      }
      this.props.setLocation(location)
    });
  }

  // componentDidMount() {
  //   this.getLocalCoords()
  // }

  render () {
    return (
      <section className="Application">
        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </section>
    )
  }
}

export default App;
