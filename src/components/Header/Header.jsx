// Header.jsx
import React from 'react';
import './Header.css';
import { Cart } from '../CartIcon/CartIcon';

export const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <img src="src/assets/logo.svg" alt="Logo" className="logo" />
      <nav className="nav">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link menu-active">Menu</a>
        <a href="#" className="nav-link">Company</a>
        <a href="#" className="nav-link">Login</a>
      </nav>
      <Cart cartCount={cartCount} />
    </header>
  );
};
