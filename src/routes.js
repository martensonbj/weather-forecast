import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Main from './components/Main';
import Settings from './components/Settings';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
      <IndexRoute component={Main} />
      <Route path="/settings" component={Settings} />
    </Route>
  </Router>
);

export default Routes;
