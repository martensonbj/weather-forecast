const apiKey = '9368e7f02a2beece1296d5538c3bdb6c'

const getWeather = (response) => {
  console.log('ready to dispatch current location weather')
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

const pinCity = (response, index) => {
  console.log("action dispatching new city")

  let formattedWeather = {
    index,
    city: response.city.name,
    temp: response.list[0].main.temp,
    desc: response.list[0].weather[0].main,
    wind: response.list[0].wind.speed
  }

  return {
    type: 'PIN_NEW_CITY',
    cityWeather: formattedWeather
  }
}

export const setLocation = (location) => {
  console.log("in Set Location action");
  let localWeather = `http://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=imperial&APPID=${apiKey}`

  return (dispatch) => {
    return  fetch(localWeather)
            .then(response => response.json())
            .then(json => dispatch(getWeather(json)))
            .catch(err => console.log("error in getting location: " + err))
  }
}

export const setNewCity = (city, index) => {
  console.log("in setNewCity action")
  let cityData = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&APPID=${apiKey}`

  return (dispatch) => {
    return  fetch(cityData)
    .then(response => response.json() )
    .then(json => dispatch(pinCity(json, index)))
    .catch(err => console.log("error in adding city: " + err))
  }
}
