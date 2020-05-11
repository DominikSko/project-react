import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';  // typy wartości w propsach, properties, typy danych for Java Script
import Column from '../Column/Column.js';

class List extends React.Component {  // dziedziczy ona z klasy React.Component
  static PropTypes = {
    title: PropTypes.node.isRequired,       // zapisujemy obiekt, w którym kluczami są nazwy właściwości komponentów, które mogą być do niego przekazywane.
    children: PropTypes.node.isRequired,    // .isRequired, jeśli chcemy wyświetlić błąd w konsoli, jeśli komponent nie otrzymał danej właściwości. Jeśli nie dodamy .isRequired, parametr ten będzie opcjonalny.
    image: PropTypes.string.isRequired,     // why string?
  }
  static defaultProps = {                   // domyslna wartosc wlasciwosci. np kiedy nie zostanie podana zadna zawartosc opisu listy 
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} spaceImage={this.props.image}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnTitle={this.props.title1} />
          <Column columnTitle={this.props.title2} />
          <Column columnTitle={this.props.title2} />
        </div>
      </section>
    )
  }
}

export default List;
