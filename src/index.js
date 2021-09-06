import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';
import "bootstrap/dist/css/bootstrap.css";
import AppRouter from './routes/AppRouter';


ReactDOM.render(
  <Provider store={store}>
  <AppRouter />
 </Provider>,
  document.getElementById('root')
);


