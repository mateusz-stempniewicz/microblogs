import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GlobalStyle from '../../style/GlobalStyle';
import Navigation from '../../components/Navigation';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.shape
};

export default Layout;
