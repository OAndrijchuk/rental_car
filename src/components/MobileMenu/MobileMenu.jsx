import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { MobileMenuCont } from './MobileMenu.styled';
import { CloseBtn } from 'components/CarDetails/CarDetails.styled';
import { closeModal } from 'redux/carDetails/carDetailsSlice';
import { SpriteSVG } from 'pictures/SVG/SpriteSVG';
import { useDispatch } from 'react-redux';

const MobileMenu = () => {
  const dispatch = useDispatch();
  return (
    <MobileMenuCont>
      <Navigation />
      <CloseBtn onClick={() => dispatch(closeModal())}>
        <SpriteSVG name={'close'} />
      </CloseBtn>
    </MobileMenuCont>
  );
};

export default MobileMenu;
