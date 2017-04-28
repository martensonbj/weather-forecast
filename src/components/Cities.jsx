import React from 'react'
import City from './City'

const getPinnedCities = (cities) => {
  return cities.map((city, index) => {
    return (
      <City key={index} index={index} city={city.city} desc={city.desc} temp={city.temp} wind={city.wind} />
    )
  })
}

const Cities = ({ pinnedCities }) => {
  return (
    <section className="Cities">
      { getPinnedCities(pinnedCities) }
    </section>
  )
}

export default Cities
