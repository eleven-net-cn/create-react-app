/**
 * import 'core-js/stable';
 * import 'regenerator-runtime/runtime';
 * 等价于 ☞ import 'react-app-polyfill/stable';
 * CRA 官方不常升级 core-js，因此，自行引入 core-js，效果一致。
 * 如果不需要考虑兼容性，可删除。
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// 兼容支持到 IE9，如果不需要可删除。
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
