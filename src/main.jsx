import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import { TechnicalServiceApp } from './TechnicalServiceApp.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TechnicalServiceApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)