import React from 'react';
import { Link } from 'react-router-dom';

// scss
import './header.scss';

// stateless component
const Header = (() =>
  <header>
    <div className="header-component">
      <Link to="/">component 1</Link>
      <Link to="/component-2">component 2</Link>
    </div>
  </header>
);

export default Header;
