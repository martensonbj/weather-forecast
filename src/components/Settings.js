import React from 'react'

const getPinnedCities = (pinnedCities) => {
  if (pinnedCities) {
    return (
      <ul>
        { pinnedCities.forEach(city => {
          <li>{city.name}</li>
        })}
      </ul>
    )
  } else {
    return (
      <p>You have not saved any cities.</p>
    )
  }
}


// FORM STUFF

/*
  onSubmit
  Grab city name
  Clean city name
  send it through API call - setLocation action
  getWeather response
  save weather response into localStorage

*/
const Settings = ( { pinnedCities } ) => {

  return (
    <section className="Settings">

      <section>
        <h2>Pinned Cities</h2>

        <form>
          <input type="text" placeholder="Enter City" />
          <button>+</button>
        </form>

        { getPinnedCities(pinnedCities) }
      </section>

    </section>
  )

}

export default Settings;
