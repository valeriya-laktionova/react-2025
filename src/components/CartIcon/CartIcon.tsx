import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { cartIcon}  from '../../assets';
import './CartIcon.css';

export const Cart: React.FC = () => {
  const navigate = useNavigate();

  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const handleClick = () => {
    navigate('/order');
  };

  return (
    <div className="cart">
      <button className="cart-button" onClick={handleClick}>
        <img src={cartIcon} alt="Cart" className="cart-icon" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>
    </div>
  );
};
