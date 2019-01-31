import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { withAuthenticator } from 'aws-amplify-react';
import { IntlProvider } from 'react-intl';

import theme from './style/theme';
import { messages } from './translations/config';
import Layout from './pages/Layout';

const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ExplorePage = lazy(() => import('./pages/ExplorePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const App = () => (
  <IntlProvider locale="en" messages={messages.en}>
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={''}>
          <Layout>
            <Route exact path="/" render={() => <DashboardPage />} />
            <Route exact path="/blog" render={() => <BlogPage />} />
            <Route exact path="/explore" render={() => <ExplorePage />} />
            <Route exact path="/register" render={() => <RegisterPage />} />
            <Route exact path="/login" render={() => <LoginPage />} />
          </Layout>
        </Suspense>
      </Router>
    </ThemeProvider>
  </IntlProvider>
);

export default withAuthenticator(App, true);
