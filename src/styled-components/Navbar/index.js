import styled from 'styled-components';

const Navbar = styled.header`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.07),
    0px 1px 10px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  height: 75px;
  justify-content: center;
  margin-bottom: 20px;
  padding: 20px 0;
  width: 100%;
`;

Navbar.displayName = 'Navbar';

export default Navbar;
