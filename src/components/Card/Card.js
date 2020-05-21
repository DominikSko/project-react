import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  
  render(){
    const {title} = this.props;
    return(
      <article className={styles.component}>
        <h2>{title}</h2>
      </article>
    );
  }
}

export default Card;