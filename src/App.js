import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Registration } from './pages';
import './assets/scss/index.scss';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sign-up' component={Registration} />
      </main>
    </div>
  );
};

export default App;
