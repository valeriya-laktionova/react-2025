import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Cart } from '../CartIcon/CartIcon';

export const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <img src="src/assets/logo.svg" alt="Logo" className="logo" />
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'nav-link menu-active' : 'nav-link'}
        >
          Home
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) => isActive ? 'nav-link menu-active' : 'nav-link'}
        >
          Menu
        </NavLink>

        <NavLink
          to="/company"
          className={({ isActive }) => isActive ? 'nav-link menu-active' : 'nav-link'}
        >
          Company
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => isActive ? 'nav-link menu-active' : 'nav-link'}
        >
          Login
        </NavLink>
      </nav>
      <Cart cartCount={cartCount} />
    </header>
  );
};
