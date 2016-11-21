import React from 'react'

const handleSubmit = (e, input, setNewCity, index) => {
  e.preventDefault()
  let city = input.value.toLowerCase()
  setNewCity(city, index)
}

const NewCityForm = ({index, setNewCity}) => {
  let input;
  return (
    <form className="NewCityForm" onSubmit={(e) => handleSubmit(e, input, setNewCity, index)}>
      <input  type="text"
              placeholder="Enter City"
              ref={(node) => { input = node }}/>
    </form>
  )
}

export default NewCityForm;
