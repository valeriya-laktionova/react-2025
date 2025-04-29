import React from "react";
import { ShoppingCart } from "lucide-react";



export const Header = () => {
  return (
    <header className="header">
      <img src="src/assets/logo.svg" alt="Logo" className="logo" />
      <nav className="nav">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link menu-active">Menu</a>
        <a href="#" className="nav-link">Company</a>
        <a href="#" className="nav-link">Login</a>
      </nav>
      <div className="cart-container">
        <ShoppingCart className="cart-icon" />
        <span className="cart-badge">0</span>
      </div>
    </header>
    
  );
};

export default Header;