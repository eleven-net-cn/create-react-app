/**
 * 示例组件，编码时移除。
 */

// eg: react scoped css
import './style.scoped.scss';
import React from 'react';
import Code from './Code';
import LOGO from './logo.svg';

const Example = () => (
  <div className="example-wrapper">
    <img src={LOGO} alt="react logo" />
    <p>The react app has been created, Happy coding</p>
    <Code />
  </div>
);

export default Example;
