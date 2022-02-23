/**
 * 示例组件，编码时移除。
 */

// eg: react scoped css（暂不支持使用 @ 别名导入）
import './style.scoped.less';
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
