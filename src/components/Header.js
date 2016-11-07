import React from 'react'
import { apiKey } from '../helpers/openWeatherMap'

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

const success = (pos) => {
  let c = pos.coords
  console.log("in succes");
  console.log(c.latitude)
  console.log(c.longitude)
  console.log(c.accuracy)
  let getShit = `api.openweathermap.org/data/2.5/weather?lat=${c.latitude}&lon=${c.longitude}&APPID=${apiKey}`
  debugger;
}

const error = (err) => {
  console.warn('ERROR(' + err.code + '): ' + err.message)
}

const currentLocation = () => {
  console.log("in currentLocation function");
  navigator.geolocation.getCurrentPosition(success, error, options)
}

const Header = () => {

  currentLocation()

  return (
    <section className="Header">
      <div className="current-weather-container">
        Current Weather:
        <span className="current-weather">
          { apiKey }
        </span>
      </div>
    </section>
  )
}

export default Header;
