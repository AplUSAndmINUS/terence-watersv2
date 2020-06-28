import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DayJSUtils from '@date-io/dayjs';
import { MuiThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { addDecorator } from '@storybook/react';

import { GlobalStyles } from '../src/globalStyles';
import { theme } from '../src/theme/material-ui';

const ProviderDecorator = (storyFn, theme) => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DayJSUtils}>
        <GlobalStyles />
        <div>{storyFn()}</div>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </BrowserRouter>
);

addDecorator(ProviderDecorator);
