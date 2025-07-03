import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import { TechnicalServiceApp } from './TechnicalServiceApp.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <TechnicalServiceApp />
    </BrowserRouter>
  </React.StrictMode>
)