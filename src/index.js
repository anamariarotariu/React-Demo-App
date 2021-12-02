import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// we import a css file and this file will contain styles that should be injected into the loaded page
import './index.css'
ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);

