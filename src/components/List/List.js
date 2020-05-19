import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';  // typy wartości w propsach, properties, typy danych for Java Script
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

class List extends React.Component {  // dziedziczy ona z klasy React.Component
  
  static propTypes = {
    title: PropTypes.node.isRequired,       // zapisujemy obiekt, w którym kluczami są nazwy właściwości komponentów, które mogą być do niego przekazywane.
    //children: PropTypes.node.isRequired,    // .isRequired, jeśli chcemy wyświetlić błąd w konsoli, jeśli komponent nie otrzymał danej właściwości. Jeśli nie dodamy .isRequired, parametr ten będzie opcjonalny.
    image: PropTypes.string.isRequired,     // why string?
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }
  static defaultProps = {                   // domyslna wartosc wlasciwosci. np kiedy nie zostanie podana zadna zawartosc opisu listy 
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>              
          {columns.map(columnData => ( // wykorzystanie wartosci ze stanu, Metoda .map, którą tutaj wykorzystujemy, jest dostępna dla każdej tablicy (array). Służy ona do modyfikacji każdego jej elementu – ale zamiast zmieniać tablicę, na której została wykonana, zwraca nową tablicę ze zmienionymi wartościami.
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn}/>
        </div>
      </section>
    );
  }
}

export default List;
