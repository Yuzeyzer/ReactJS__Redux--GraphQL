import React from 'react';
import Nav from './nav';
import Logo from './logo';

import './styles/header.scss';

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header__row'>
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  );
};
