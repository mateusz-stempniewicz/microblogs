import React from 'react';
import styled from 'styled-components';

import NavRouteEnum from '../../enums/NavRouteEnum';
import Navbar from '../../styled-components/Navbar';
import NavList from '../../styled-components/NavList';
import NavListItem from './NavListItem';

const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  width: 1200px;
`;

const Navigation = () => (
  <Navbar>
    <NavContainer>
      <NavList>
        {NavRouteEnum.map((route, index) => (
          <NavListItem key={index} linkName={route.linkName} path={route.path} />
        ))}
      </NavList>
    </NavContainer>
  </Navbar>
);

export default Navigation;
