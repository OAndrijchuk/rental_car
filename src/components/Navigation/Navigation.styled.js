import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavCont = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & .active {
    text-decoration: underline;
  }
  @media screen and (min-width: 608px) {
    max-width: 578px;
    flex-direction: row;
  }
  @media screen and (min-width: 908px) {
    max-width: 878px;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.colorBtn};
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43; /* 142.857% */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  transition: color 250ms ease;
  &:hover {
    color: #0b44cd;
  }
`;
