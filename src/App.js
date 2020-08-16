import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Registration } from './pages';
import './assets/scss/index.scss';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-up' component={Registration} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
