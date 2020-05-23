import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer.js';
//import {pageContents, listData} from '../../data/dataStore';

class Home extends React.Component {  // dziedziczy ona z klasy React.Component
  render() {
    const {lists, title, subtitle} = this.props; // chcemy aby treść była pobierana z propsów komponentu
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2> 
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        {/*<List {...listData} /> */} 
      </main>
    );
  }
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
}

// <List {...listData} /> spread operator, który pozwala na rozpakowanie obiektu lub tablicy.
// nowością jest tylko słowo default. Dzięki niemu, importując App w pliku index.js, możemy pominąć nawiasy klamrowe, czyli nie musimy pisać import {App} from '...';, tak jak do tej pory to robiliśmy.
export default Home;
