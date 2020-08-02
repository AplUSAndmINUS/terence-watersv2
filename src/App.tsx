import React from 'react';
import DayJSUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { GlobalStyles } from './globalStyles';
import { MuiThemeProvider } from './theme/material-ui';

function App() {
  return (
    <>
      <MuiThemeProvider>
        <MuiPickersUtilsProvider utils={DayJSUtils}>
          <GlobalStyles />
          <div className="App">
            <h1>This is an app!</h1>
          </div>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
