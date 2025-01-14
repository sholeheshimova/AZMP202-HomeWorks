import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {Routes} from "react-router-dom"
import { Routes, Route, BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import FavoritesProvider from './context/FavoritesContext.jsx';
import BasketProvider from './context/BasketContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BasketProvider>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
    </BasketProvider>
    
  </BrowserRouter>
    
  
)
