import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeComponent from './pages/home/HomeComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomeComponent />
  </React.StrictMode>
);
