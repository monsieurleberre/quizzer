import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Quizzer</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the player <Link to="player">demo app</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;
