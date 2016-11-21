import React from 'react'
import { Link } from 'react-router'
import NewCityForm from '../containers/NewCityForm'
import DisplayCity from './DisplayCity'

const getPinnedCities = (pinnedCities) => {
  return pinnedCities.map((city, i) => {
    return (
      <div key={i} className="listed-city">
        { city.city === 'default'
          ? <NewCityForm index={i} />
          : <DisplayCity index={i} city={city.city} /> }
      </div>
    )
  })
}

const Settings = ( { pinnedCities } ) => {

  return (
    <section className="Settings">
      <Link to="/" className="settings-link">Home</Link>
      <h2>Pinned Cities</h2>
      <section className="pinned-cities">
        { getPinnedCities(pinnedCities) }
      </section>
    </section>
  )

}

export default Settings;
