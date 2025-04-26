import React from 'react';
import cartIcon from '../../assets/Frame.svg';
import './CartIcon.css';

export const Cart = ({ cartCount }) => {
  return (
    <div className="cart">
      <button className="cart-button">
        <img src={cartIcon} alt="Cart" className="cart-icon" />
      </button>
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

