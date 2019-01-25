import React from 'react';
import styled from 'styled-components';

import Navbar from '../../styled-components/Navbar';

const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  width: 1200px;
`;

const Navigation = () => (
  <Navbar>
    <NavContainer>Nawigacja</NavContainer>
  </Navbar>
);

export default Navigation;
