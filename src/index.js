import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { globalStyles } from './styles';
import { Global } from '@emotion/core';

const AppRoot = () => (
  <Fragment>
    <Global 
      styles={globalStyles}
    />
    <App />
  </Fragment>
)

ReactDOM.render(<AppRoot />, document.getElementById('root'));
