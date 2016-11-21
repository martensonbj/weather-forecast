const defaultState = [
  { name: "Sarasota", temp: "", description: "", wind: ""},
  { name: "default", temp: "", description: "", wind: ""},
  { name: "default", temp: "", description: "", wind: ""}
]

const pinnedCitiesReducer = (state = defaultState, action) => {
console.log("in pinned cities reducer")
  switch (action.type) {
    case 'SET_PINNED_CITY':
      return state
    default:
      return defaultState
  }
}

export default pinnedCitiesReducer;
