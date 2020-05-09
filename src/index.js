import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// <App /> to <App></App> jest to JSX Pełna nazwa tej składni to JavaScript XML. Pozwala na pisanie kodu, który jest bardzo podobny do HTMLa.
ReactDOM.render(<App />, document.getElementById('app'));

