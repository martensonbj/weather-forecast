import React from 'react'
import { Link } from 'react-router'

const Header = ({localWeather}) => {
  return (
    <section className="Header">
      <Link to="/"><span className="brand">WF</span></Link>
      <div className="current-weather-container">
        <p>Current Weather:
            { localWeather.city
              ? <span className="local-weather-results">
                { localWeather.desc }, { localWeather.temp}&deg;F, { localWeather.wind } mph winds
                </span>
              : <span className="loading-local"> Loading weather...</span>
            }

        </p>
      </div>
      <div className="current-location-container">
        <p>Location:
        { localWeather.city
          ? <Link to={localWeather.city.toLowerCase()}><span className="local-weather-results"> { localWeather.city }</span></Link>
          : <span className="loading-local"> Loading city... </span>
        }
        </p>
      </div>
    </section>
  )
}

export default Header;
