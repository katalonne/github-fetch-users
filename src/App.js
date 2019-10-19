import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import User from './components/users/User';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';

import './App.css';
import './react-transitions.css';

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 40px;
`;

const App = () => {
  return (
    <GithubState>
      <Router>
        <AppContainer>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </AppContainer>
      </Router>
    </GithubState>
  );
};

export default App;
