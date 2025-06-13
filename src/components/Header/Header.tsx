import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Cart } from '../CartIcon/CartIcon';
import { useAppSelector } from '../../hooks/hooks';

export const Header: React.FC = () => {
  const cartCount = useAppSelector(state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="header">
      <img src="src/assets/logo.svg" alt="Logo" className="logo" />
      <nav className="nav">
        {['/', '/Menu', '/Company', '/Login'].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            className={({ isActive }) => isActive ? 'nav-link menu-active' : 'nav-link'}
          >
            {path === '/' ? 'Home' : path.replace('/', '')}
          </NavLink>
        ))}
      </nav>
      <Cart cartCount={cartCount} />
    </header>
  );
};
