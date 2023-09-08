import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import Logo from '../Logo/Logo';
import { BurgerMenuBtn, HeaderCont, HeaderStyled } from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { IS_DESKTOP, IS_MOBILE, IS_TABLET } from 'style/const ';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import Modal from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { isMobileMenuOpenSelector } from 'redux/carDetails/selectors';
import { mobileMenuOpen } from 'redux/carDetails/carDetailsSlice';
import { SpriteSVG } from 'pictures/SVG/SpriteSVG';

function Header() {
  const isMobile = useMediaQuery(IS_MOBILE);
  const isTablet = useMediaQuery(IS_TABLET);
  const isDesktop = useMediaQuery(IS_DESKTOP);

  const isMobileMenuOpen = useSelector(isMobileMenuOpenSelector);
  const dispatch = useDispatch();

  return (
    <HeaderStyled>
      <HeaderCont>
        <Logo />
        {(isTablet || isDesktop) && <Navigation />}
        {isMobile && isMobileMenuOpen && (
          <Modal>
            <MobileMenu />
          </Modal>
        )}
        {isMobile && (
          <BurgerMenuBtn
            type="button"
            onClick={() => dispatch(mobileMenuOpen())}
          >
            <SpriteSVG name={'burger'} />
          </BurgerMenuBtn>
        )}
      </HeaderCont>
    </HeaderStyled>
  );
}

export default Header;
