// eg: react css modules（暂不支持使用 @ 别名导入）
import './style.module.less';
import React, { FC } from 'react';

const Code: FC = () => {
  return (
    // use styleName
    <code styleName="code-wrapper">
      yarn create react-app my-app --template @eleven.fe/cra-template-typescript
    </code>
  );
};

export default Code;
