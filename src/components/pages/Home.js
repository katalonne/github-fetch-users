import React from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => (
  <div className="react-transition swipe-left">
    <Search />
    <Users />
  </div>
);

export default Home;
