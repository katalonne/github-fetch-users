import React, { Fragment } from 'react'
import logo from './logo.png';

const Logo = ({height = 60}) => <Fragment>
  <img src={logo} alt="Logo" 
    style={{
      width: `${height}px`, 
      margin: 'auto', 
      display: 'block'
    }}
  />
</Fragment>

export default Logo
