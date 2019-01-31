import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { withAuthenticator } from 'aws-amplify-react';
import { IntlProvider } from 'react-intl';

import theme from './style/theme';
import GlobalStyle from './style/GlobalStyle';
import { messages } from './translations/config';
import AuthenticatedLayout from './pages/AuthenticatedLayout';

// const RegisterPage = lazy(() => import('./pages/RegisterPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage'));

const App = () => (
  <IntlProvider locale="en" messages={messages.en}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router>
          <Suspense fallback={''}>
            <AuthenticatedLayout />
          </Suspense>
        </Router>
      </>
    </ThemeProvider>
  </IntlProvider>
);

// export default withAuthenticator(App, true);
export default App;
