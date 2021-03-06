import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import { configureStore } from './store/store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(configureStore, {}, applyMiddleware(reduxThunk))


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>

        <App />

      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
