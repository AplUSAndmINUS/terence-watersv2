import React from 'react';
import { Router } from 'react-router-dom';
import DayJSUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { GlobalStyles } from './globalStyles';
import Routes from './routes';
import history from './services/history';
import { MuiThemeProvider } from './theme/material-ui';

function App() {
  return (
    <Router history={history}>
      <MuiThemeProvider>
        <MuiPickersUtilsProvider utils={DayJSUtils}>
          <GlobalStyles />
          <div className="App">
            <h1>This is an app!</h1>
            <nav>
              <Routes />
            </nav>
          </div>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
