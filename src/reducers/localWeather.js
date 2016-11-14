const localWeatherReducer = (state = {}, action) => {
  console.log("in local weather reducer");
  switch (action.type) {
    case 'GET_LOCAL_WEATHER':
      return Object.assign({}, state, action.localWeather)
    default:
      return state
  }
}

export default localWeatherReducer
