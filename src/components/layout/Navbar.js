import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        {title}
      </h1>
      <Logo height={100}/>
      <ul>
        <li>
          <NavLink activeClassName='active' exact to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' exact to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Fluency Academy'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
