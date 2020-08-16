import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav__menu'>
        <li className='nav__item'>
          <Link className='nav__link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/about'>
            About
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/catalog'>
            Catalog
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/sign-up'>
            Sign Up
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/login'>
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
