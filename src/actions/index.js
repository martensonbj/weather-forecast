const apiKey = '9368e7f02a2beece1296d5538c3bdb6c'
// import fetch from 'isomorphic-fetch'
export const getWeather = (response) => {
  console.log('in getWeather action')
  console.log(response);

  let formattedLocalWeather = {
    city: response.city.name,
    temp: response.list[0].main.temp,
    desc: response.list[0].weather[0].main,
    wind: response.list[0].wind.speed
  }

  return {
    type: 'GET_LOCAL_WEATHER',
    localWeather: formattedLocalWeather
  }
}

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&APPID=1111111111

export const setLocation = (location) => {
  console.log("in Set Location action");
  let localWeatherResults = `http://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=imperial&APPID=${apiKey}`

  return (dispatch) => {
    return  fetch(localWeatherResults)
            .then(response => response.json())
            .then(json => dispatch(getWeather(json)))
            .catch(err => console.log("error: " + err))
  }
}
