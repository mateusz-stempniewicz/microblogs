import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.li`
  color: ${({ theme }) => theme.color.black}
  display: inline;
  font-weight: bold;
  margin-right: 10px;
  text-decoration: none;
`;

const activeLinkStyles = {
  borderBottom: '1px solid #21e6c1',
  color: '#21e6c1'
};

const NavListItem = ({ linkName, path }) => (
    <StyledWrapper as={NavLink} exact to={path} activeStyle={activeLinkStyles}>
      {linkName}
    </StyledWrapper>
  );

NavListItem.displayName = 'NavListItem';

NavListItem.propTypes = {
  linkName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default NavListItem;
