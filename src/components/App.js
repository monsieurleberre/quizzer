import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import NavBar from './navBar/NavBar';

const App = (props) => {
  return (
    <div>
      <NavBar />
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/login">Login</Link>
      {' | '}
      <Link to="/about">About</Link>
      {' | '}
      <Link to="/player">Player</Link>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;