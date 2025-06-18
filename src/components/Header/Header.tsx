
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Cart } from '../CartIcon/CartIcon';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img src="src/assets/logo.svg" alt="Logo" className="logo" />
      <nav className="nav">
        {['/', '/Menu', '/Company', '/Login'].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            className={({ isActive }) => (isActive ? 'nav-link menu-active' : 'nav-link')}
          >
            {path === '/' ? 'Home' : path.replace('/', '')}
          </NavLink>
        ))}
      </nav>
      <Cart />
    </header>
  );
};
