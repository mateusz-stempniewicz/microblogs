import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { withAuthenticator } from 'aws-amplify-react';
import { IntlProvider } from 'react-intl';

import theme from './style/theme';
import { messages } from './translations/config';
import Layout from './pages/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const App = () => (
  <IntlProvider locale="en" messages={messages.en}>
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Suspense fallback={''}>
            <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="/dashboard" render={() => <DashboardPage />} />
            <Route exact path="/register" render={() => <RegisterPage />} />
            <Route exact path="/login" render={() => <LoginPage />} />
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  </IntlProvider>
);

export default withAuthenticator(App, true);
