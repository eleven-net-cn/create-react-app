// https://github.com/zloirock/core-js#babelpolyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// https://github.com/facebook/create-react-app/blob/main/packages/react-app-polyfill/ie9.js
import 'react-app-polyfill/ie9';
import './assets/styles/index.less';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
