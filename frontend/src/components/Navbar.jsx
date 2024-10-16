import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/register" className="navbar-link">Register</Link>
        </li>
        <li>
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
        <li>
          <Link to="/plants" className="navbar-link">Plants</Link>
        </li>
        <li>
          <Link to="/care-tips" className="navbar-link">Care Tips</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
