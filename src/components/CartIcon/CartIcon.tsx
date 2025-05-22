import React from 'react';
import cartIcon from '../../assets/Frame.svg';
import './CartIcon.css';

type CartProps = {
  cartCount: number;
};

export const Cart: React.FC<CartProps> = ({ cartCount }) => {
  return (
    <div className="cart">
      <button className="cart-button">
        <img src={cartIcon} alt="Cart" className="cart-icon" />
      </button>
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};
