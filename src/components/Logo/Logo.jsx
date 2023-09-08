import React from 'react';
import logo from '../../pictures/logo/car-key.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="car" />
    </Link>
  );
};

export default Logo;
