const localWeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_LOCAL_WEATHER':
      return Object.assign({}, state, action.localWeather)
    default:
      return state
  }
}

export default localWeatherReducer
