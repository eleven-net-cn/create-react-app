// eg: react css modules
import './style.module.scss';
import React, { FC } from 'react';

const Code: FC = () => {
  return (
    // use styleName
    <code styleName="code-wrapper">
      npx create-react-app my-app --template @eleven.fe/cra-template-typescript
    </code>
  );
};

export default Code;
