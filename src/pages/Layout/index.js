import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from '../../style/GlobalStyle';
import Navigation from '../../components/Navigation';

const Layout = ({ children }) => (
    <>
      <GlobalStyle />
      <Navigation />
      {children}
    </>
  );

Layout.propTypes = {
  children: PropTypes.shape
};

export default Layout;
