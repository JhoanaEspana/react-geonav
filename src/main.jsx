import React from 'react';
import ReactDOM from 'react-dom/client';
import {CartGrid} from './components/CartView/CartGrid';
import MainContent from './components/Header/MainContent';
import MenuBar from './components/Header/MenuBar/MenuBar';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuBar />
    <MainContent />
    <CartGrid />
  </React.StrictMode>
);
