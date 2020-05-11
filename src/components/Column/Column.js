import React from 'react';
import styles from './Column.scss';  // do omówienia
import PropTypes from 'prop-types';  // do omowienia

class Column extends React.Component {
    static PropTypes = {
        columnTitle: PropTypes.string, 
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.columnTitle}</h3>
            </section>
        )
    }
}

export default Column;