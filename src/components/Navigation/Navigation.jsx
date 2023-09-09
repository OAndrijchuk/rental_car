import React from 'react';
import { NavCont, NavLinkStyled } from './Navigation.styled';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/carDetails/carDetailsSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <NavCont>
      <NavLinkStyled to="/" onClick={() => dispatch(closeModal())}>
        Home
      </NavLinkStyled>
      <NavLinkStyled to="/catalog" onClick={() => dispatch(closeModal())}>
        Catalog
      </NavLinkStyled>
      <NavLinkStyled to="/favorites" onClick={() => dispatch(closeModal())}>
        Favorites cars
      </NavLinkStyled>
    </NavCont>
  );
};

export default Navigation;
