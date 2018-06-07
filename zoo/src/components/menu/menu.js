import React from'react';
import { Link } from'react-router-dom';

const Menu = () => (
  <nav>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/zoo-list">Zoo List</Link>
      <Link to="/form-animal">Add animal</Link>
    </ul>
  </nav>
);

export default Menu;
