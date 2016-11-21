import React from 'react'
import { Link } from 'react-router'
import NewCityForm from './NewCityForm'

const getBlankCity = (index) => {
  return (
    <NewCityForm index={index}/>
  )
}

const getCity = (props) => {
  const { name, desc, temp, wind, index } = props
  return (
    <div className="Filled-City">
      <h2>{name}</h2>
      <p className="weather">{desc}</p>
      <p className="weather">{temp}</p>
      <p className="weather">{wind}</p>
      <p className="extended-link">View extended forecast...</p>
    </div>
  )
}

const City = (props) => {
  const { name, index } = props
  return (
    <div className="City">
      { name === 'default' ? getBlankCity(index) : getCity(props) }
    </div>
  )
}

export default City
