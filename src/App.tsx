import React from 'react';
import { GlobalStyles } from './globalStyles';
import { MuiThemeProvider } from './theme/material-ui';

function App() {
  return (
    <>
      <GlobalStyles />
      <MuiThemeProvider>
        <div className="App">
          <h1>This is an app!</h1>
        </div>
      </MuiThemeProvider>
    </>
  );
}

export default App;
