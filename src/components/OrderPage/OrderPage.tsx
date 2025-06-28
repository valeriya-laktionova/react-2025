import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { removeItem, updateQuantity, resetCart } from '../../store/cartSlice';
import { Button } from '../../components/Button/Button';
import './OrderPage.css';

export const OrderPage: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');

  const handleOrder = () => {
    if (!street || !house) {
      alert('Please enter both street and house.');
      return;
    }

    console.log('Order submitted:', { street, house, cartItems });
    dispatch(resetCart());
    alert('Order placed successfully!');
  };

  return (
    <div className="order-container">
      <h2 className="order-heading">Finish your order</h2>

      {cartItems.length === 0 ? (
        <p className="order-empty">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.img} alt={item.meal} className="order-img" />
            <div className="order-details">
              <div className="order-info">
                <h4 className="order-title">{item.meal}</h4>
                <span className="order-price">${item.price.toFixed(2)} USD</span>
              </div>
              <div className="order-actions">
                <input
                  type="number"
                  min={1}
                  className="order-qty"
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value, 10) }))
                  }
                />
                <button
                  type="button"
                  className="order-remove"
                  onClick={() => dispatch(removeItem(item.id))}
                  aria-label="Remove item"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div className="order-form-wrapper">
          <div className="order-address">
            <label htmlFor="street">Street</label>
            <input
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <label htmlFor="house">House</label>
            <input
              id="house"
              value={house}
              onChange={(e) => setHouse(e.target.value)}
            />
          </div>
          <Button onClick={handleOrder}>Order</Button>
        </div>
      )}
    </div>
  );
};
