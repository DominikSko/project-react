import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser'; // Parsowanie kodu HTML, npm install --save react-html-parser

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.image}></img>
  </header>
);
Hero.propTypes = {         // PropTypes w komponencie funkcyjnym
  titleText: PropTypes.node.isRequired,  // typy wlasciwosci https://reactjs.org/docs/typechecking-with-proptypes.html
  image: PropTypes.string,
};

export default Hero;