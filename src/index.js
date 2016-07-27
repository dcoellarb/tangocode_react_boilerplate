import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from './muiThemeConfig';
import Router from './router';
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

/* require css */
// require('./../static/assets/css/app.css');

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>{Router}</Provider>
  </MuiThemeProvider>, document.getElementById('root')
);
