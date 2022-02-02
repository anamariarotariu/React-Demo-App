import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// we import a css file and this file will contain styles that should be injected into the loaded page
import './index.css'
import { FavoritesContextProvider } from "./store/favorites-context"
ReactDOM.render(
  <FavoritesContextProvider>
    <App></App>
  </FavoritesContextProvider>,
  document.getElementById('root')
);

