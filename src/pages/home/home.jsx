import React from 'react';

import { Women, Men } from '../directories/index.js';

import './index.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className='home__row'>
        <Women className='home__column' />
        <Men className='home__column' />
      </div>
    </section>
  );
};

export default Home;
