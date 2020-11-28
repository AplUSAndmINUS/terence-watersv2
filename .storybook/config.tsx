import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DayJSUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { GlobalStyles } from '../src/globalStyles';
import { MuiThemeProvider } from '../src/theme/theme';

const ProviderDecorator = storyFn => (
  <BrowserRouter>
    <MuiThemeProvider>
      <MuiPickersUtilsProvider utils={DayJSUtils}>
        <GlobalStyles />
        <div>{storyFn()}</div>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </BrowserRouter>
);

addDecorator(ProviderDecorator);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'someDefault'
  }
});

configure(require.context('../src', true, /\.stories\.ts?x$/), module);
