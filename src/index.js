import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'

import Routes from './routes'
import reducers from './reducers/index'

require("!style!css!./styles/main.css")

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f)

const store = createStore(reducers, {}, enhancers)

render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
