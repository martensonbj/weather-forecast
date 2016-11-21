import React from 'react'
import City from './City'

const getPinnedCities = (cities) => {
  console.log("in get pinned cities");
  return cities.map( (city, i) => {
    return (
      <City key={i} index={i} name={city.name} desc={city.description} temp={city.temp} wind={city.wind} />
    )
  })
}

const Cities = ({pinnedCities}) => {
  return (
    <section className="Cities">
      { getPinnedCities(pinnedCities) }
    </section>
  )
}

export default Cities
