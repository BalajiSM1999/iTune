import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './style/responsive.css'

ReactDOM.render(
  <Provider store ={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);


