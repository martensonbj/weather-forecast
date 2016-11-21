import React from 'react'

// FORM STUFF

/*
  onSubmit
  Grab city name
  Clean city name
  send it through API call - setLocation action
  getWeather response
  save weather response into localStorage

*/

const Form = ({index}) => {
  return (
    <form className="NewCityForm">
      <input type="text" placeholder="Enter City" />
      <button>+</button>
    </form>
  )
}

export default Form;
