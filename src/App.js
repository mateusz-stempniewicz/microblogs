import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { withAuthenticator } from 'aws-amplify-react';

import theme from './style/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple - system,
    BlinkMacSystemFont,
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          App
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default withAuthenticator(App, true);
