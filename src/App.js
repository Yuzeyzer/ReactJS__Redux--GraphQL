import React from 'react';

import { Header } from './components';
import { Home } from './pages';
import './assets/scss/index.scss';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
