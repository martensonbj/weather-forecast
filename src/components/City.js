import React from 'react'
import NewCityForm from '../containers/NewCityForm'
import { Link } from 'react-router'

const getBlankCity = (index) => {
  return (
    <NewCityForm index={index} />
  )
}

const getCity = (props) => {
  const { city, desc, temp, wind } = props
  return (
    <div className="Filled-City">
      <h2>{city}</h2>
      <p className="weather description">{desc}</p>
      <p className="weather">Temperature: <span>{temp}</span></p>
      <p className="weather">Wind Speed: <span>{wind} mph</span></p>
      <Link to={city.toLowerCase()}><button className="extended-link">View extended forecast...</button></Link>
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
