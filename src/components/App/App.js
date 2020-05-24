import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import MainLayout from '../MainLayout/MainLayout.js';
// podłączenie routingu w App
import {BrowserRouter, Switch, Route} from 'react-router-dom';


const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/FAQ' component={FAQ} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;