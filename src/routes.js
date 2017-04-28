import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Main from './components/Main'
import Settings from './containers/Settings'
import ExtendedCity from './components/ExtendedCity'

const Routes = (props) => {
  return (
    <Router {...props}>
      <Route path="/" component={App} >
        <IndexRoute component={Main} />
        <Route exactly path="/settings" component={Settings} />
        <Route exactly path="/:city" component={ExtendedCity} />
      </Route>
    </Router>
  )
}

export default Routes
