import React from 'react'
import NewCityForm from '../containers/NewCityForm'

const getBlankCity = (index) => {
  return (
    <NewCityForm index={index}/>
  )
}

const getCity = (props) => {
  const { city, desc, temp, wind } = props
  return (
    <div className="Filled-City">
      <h2>{city}</h2>
      <p className="weather">{desc}</p>
      <p className="weather">{temp}</p>
      <p className="weather">{wind}</p>
      <p className="extended-link">View extended forecast...</p>
    </div>
  )
}

const City = (props) => {
  const { city, index } = props
  return (
    <div className="City">
      { city === 'default' ? getBlankCity(index) : getCity(props) }
    </div>
  )
}

export default City
