import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import Store from './Store';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={Store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider >
);
