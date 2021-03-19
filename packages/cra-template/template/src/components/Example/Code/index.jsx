// eg: react css modules
import './style.module.scss';
import React from 'react';

const Code = () => {
  return (
    // use styleName
    <code styleName="code-wrapper">
      npx create-react-app my-app --template @eleven.fe/cra-template
    </code>
  );
};

export default Code;
