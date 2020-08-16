import React from 'react';
import { Link } from 'react-router-dom';

import WomenJpg from '../../assets/images/woman.jpg';
import ManJpg from '../../assets/images/man.jpg';
import './index.scss';

export const Women = (props) => {
  return (
    <Link to='women' className={props.className}>
      <img src={WomenJpg} alt='woman' />
      <span>Women</span>
    </Link>
  );
};

export const Men = (props) => {
  return (
    <Link to='men' className={props.className}>
      <img src={ManJpg} alt='man' />
      <span>Man</span>
    </Link>
  );
};