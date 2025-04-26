// ItemList.jsx
import React, { useState } from 'react';
import { Button } from '../Button/Button';
import './ItemList.css';

export const ItemList = ({ items, addItem }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const getQuantity = (id) => {
    return quantities[id] || 1;
  };

  const handleSubmit = (e, id, meal, price) => {
    e.preventDefault();
    const quantity = parseInt(getQuantity(id), 10);
    addItem({ id, meal, price }, quantity);
  };

  return (
    <div className="grid-layout">
      {items.map(({ id, meal, price, img, instructions }) => (
        <div className="item-card" key={id}>
          <img src={img} alt={meal} />
          <div className="card-details">
            <div className="card-header">
              <h4>{meal}</h4>
              <span>${price}</span>
            </div>
            <p className="card-description">{instructions}</p>
            <form className="order-form" onSubmit={(e) => handleSubmit(e, id, meal, price)}>
              <input
                type="number"
                min="1"
                value={getQuantity(id)}
                onChange={(e) => handleQuantityChange(id, e.target.value)}
              />
              <Button variant="add" type="submit">
                Add to cart
              </Button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};
