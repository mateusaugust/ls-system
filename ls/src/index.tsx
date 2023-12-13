import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ListAlter from './components/ListAlter';
import Form from './components/Form';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

