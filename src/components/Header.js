import React from 'react'

const Header = ({localWeather}) => {
  debugger;
  return (
    <section className="Header">
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
          ? <span className="local-weather-results"> { localWeather.city }</span>
          : <span className="loading-local"> Loading city... </span>
        }
        </p>
      </div>
    </section>
  )
}

export default Header;
