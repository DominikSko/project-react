import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img className={styles.image} src={props.spaceImage}></img>
    </header>
);
Hero.propTypes = {         // PropTypes w komponencie funkcyjnym
    titleText: PropTypes.node.isRequired,  // typy wlasciwosci https://reactjs.org/docs/typechecking-with-proptypes.html
};

export default Hero;