import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {  // dziedziczy ona z klasy React.Component
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2> 
        <List {...listData} />   
      </main>
    );
  }
}

// <List {...listData} /> spread operator, który pozwala na rozpakowanie obiektu lub tablicy.
// nowością jest tylko słowo default. Dzięki niemu, importując App w pliku index.js, możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {App} from '...';, tak jak do tej pory to robiliśmy.
export default App;
