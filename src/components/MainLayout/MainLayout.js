import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';

// Komponent Header wyświetli nawigację, 
// podczas gdy props {children} będzie renderować wszystko co zostało dodane w tagach <MainLayout> w App.js.

const MainLayout = ({children}) => (
  <div>
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;