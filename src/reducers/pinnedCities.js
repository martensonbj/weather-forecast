const defaultState = [
  { index: 0, city: "Minneapolis", temp: "100", desc: "Super Awesome", wind: "3000mph", editing: false},
  { index: 1, city: "default", temp: "", desc: "", wind: "", editing: false},
  { index: 2, city: "default", temp: "", desc: "", wind: "", editing: false}
]

const pinnedCitiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PIN_NEW_CITY':
      let newState = state.concat([])
      newState[action.cityWeather.index] = action.cityWeather
      return newState
    case 'TOGGLE_EDIT':
      return state;
    default:
      return defaultState
  }
}

export default pinnedCitiesReducer;
