import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App.jsx';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);
