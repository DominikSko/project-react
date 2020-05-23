import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './redux/store';

// <App /> to <App></App> jest to JSX Pełna nazwa tej składni to JavaScript XML. Pozwala na pisanie kodu, który jest bardzo podobny do HTMLa.
// ReactDOM.render(<App />, document.getElementById('app'));
// aby nasza aplikacja mogła korzystać z magazynu, musimy zwrappować całą aplikację w komponent Provider, który przed chwilą zaimportowaliśmy
// w store.js w ostatniej linii eksportujemy store, abyśmy mogli wykorzystać go jako props komponentu Provider, użytego w App.js.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));