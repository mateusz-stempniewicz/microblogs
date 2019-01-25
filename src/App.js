import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { withAuthenticator } from 'aws-amplify-react';

import theme from './style/theme';

import Layout from './pages/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Suspense fallback={''}>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/dashboard" render={() => <DashboardPage />} />
        </Suspense>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default withAuthenticator(App, true);
