import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';

function Logo() {
  return (
    <div className='logo'>
      <Link className='logo__link' to='/'>
        <img className='logo__img' src={logo} alt='logotype' />
      </Link>
    </div>
  );
}

export default Logo;
