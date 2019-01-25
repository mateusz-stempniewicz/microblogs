import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { withAuthenticator } from 'aws-amplify-react';

import theme from './style/theme';
import GlobalStyle from './style/GlobalStyle';

const HomePage = lazy(() => import('./pages/HomePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <Suspense fallback={''}>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/dashboard" render={() => <DashboardPage />} />
        </Suspense>
      </React.Fragment>
    </Router>
  </ThemeProvider>
);

export default withAuthenticator(App, true);
