const defaultState = [
  { index: 0, city: "default", temp: "", desc: "", wind: ""},
  { index: 1, city: "default", temp: "", desc: "", wind: ""},
  { index: 2, city: "default", temp: "", desc: "", wind: ""}
]

const pinnedCitiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PIN_NEW_CITY':
      let newState = state.concat([])
      newState[action.cityWeather.index] = action.cityWeather
      return newState
    default:
      return defaultState
  }
}

export default pinnedCitiesReducer;
