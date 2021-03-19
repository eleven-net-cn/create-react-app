// browserlist 声明的环境，不支持的 API Polyfill 会被引入
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import './assets/styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
