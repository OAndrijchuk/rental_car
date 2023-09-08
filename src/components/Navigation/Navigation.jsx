import React from 'react';
import { NavCont, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavCont>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
      <NavLinkStyled to="/favorites">Favorites cars</NavLinkStyled>
    </NavCont>
  );
};

export default Navigation;
