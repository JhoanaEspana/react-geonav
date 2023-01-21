import React from 'react';
import ReactDOM from 'react-dom/client';
import {CardGrid} from './components/CardGrid/CardGrid';
import Footer from './components/Footer/Footer';
import MainContent from './components/Header/MainContent';
import MenuBar from './components/Header/MenuBar/MenuBar';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuBar />
    <MainContent />
    <CardGrid />
    <Footer />
  </React.StrictMode>
);
