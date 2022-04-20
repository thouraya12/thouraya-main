import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/Store/Index';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Provider store ={store}>
  <App/>
 
  </Provider>,
  document.getElementById('root')
);
