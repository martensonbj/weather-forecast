const formView = (state = { editing: false, display: false }, action) => {
  switch (action.type) {
  case 'TOGGLE_EDIT':
    return Object.assign(state, { editing: !state.edit })
  case 'TOGGLE_DISPLAY':
    return Object.assign(state, { display: !state.display })
  default:
    return state
  }
}

export default formView
