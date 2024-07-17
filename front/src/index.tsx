import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import StockAppManager from './store/StoreManager';

const servicesConfig = {
  myServiceUrl: process.env.REACT_APP_MY_SERVICE_URL
};

const store = createStore(rootReducer);

const manager = new StockAppManager(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App servicesConfig={servicesConfig} storeManager={manager}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);