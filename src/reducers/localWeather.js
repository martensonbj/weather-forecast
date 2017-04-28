const localWeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_LOCAL_WEATHER':
      // return Object.assign({}, state, action.localWeather)
      return Object.assign(state, { city: 'Denver', temp: 100, desc: 'cold and stuff', wind: 'a lot'})
    default:
      return state
  }
}

export default localWeatherReducer
