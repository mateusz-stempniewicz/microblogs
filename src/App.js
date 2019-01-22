import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withAuthenticator } from 'aws-amplify-react';

import theme from './style/theme';
import GlobalStyle from './style/GlobalStyle';

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      App
    </React.Fragment>
  </ThemeProvider>
);

export default withAuthenticator(App, true);
