import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';  // typy wartości w propsach, properties, typy danych for Java Script
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {  // dziedziczy ona z klasy React.Component
  state = {
    columns: this.props.columns || [],  // stan komponentu
  }
  static propTypes = {
    title: PropTypes.node.isRequired,       // zapisujemy obiekt, w którym kluczami są nazwy właściwości komponentów, które mogą być do niego przekazywane.
    //children: PropTypes.node.isRequired,    // .isRequired, jeśli chcemy wyświetlić błąd w konsoli, jeśli komponent nie otrzymał danej właściwości. Jeśli nie dodamy .isRequired, parametr ten będzie opcjonalny.
    image: PropTypes.string.isRequired,     // why string?
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {                   // domyslna wartosc wlasciwosci. np kiedy nie zostanie podana zadna zawartosc opisu listy 
    description: settings.defaultListDescription,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} spaceImage={this.props.image}/>
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>              
          {this.state.columns.map(({key, ...columnProps}) => ( // wykorzystanie wartosci ze stanu, Metoda .map, którą tutaj wykorzystujemy, jest dostępna dla każdej tablicy (array). Służy ona do modyfikacji każdego jej elementu – ale zamiast zmieniać tablicę, na której została wykonana, zwraca nową tablicę ze zmienionymi wartościami.
            <Column key={key} {...columnProps} />
          ))}
        </div>
      </section>
    )
  }
}

export default List;
