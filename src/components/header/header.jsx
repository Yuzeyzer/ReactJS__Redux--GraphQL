import React from 'react';
import Nav from './components/nav';
import Logo from './components/logo';

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
