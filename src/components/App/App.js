import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import MainLayout from '../MainLayout/MainLayout.js';   // MainLayout tylko zagnieżdża całą stronę w divie, nowe elementy w main layout dodajemy
import {BrowserRouter, /*Switch*/ Route} from 'react-router-dom'; // podłączenie routingu w App
import {AnimatedSwitch} from 'react-router-transition';  // Animowane zmiany widoku
import styles from './App.scss';
import List from '../List/ListContainer';


const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/FAQ' component={FAQ} />
        <Route exact path="/list/:id" component={List} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;