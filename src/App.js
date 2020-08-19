import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Home, Registration } from './pages';
import './assets/scss/index.scss';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/sign-up' component={Registration} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
