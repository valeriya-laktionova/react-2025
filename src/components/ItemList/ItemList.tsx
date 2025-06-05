import React, { useState } from 'react';
import { Button } from '../Button/Button';
import './ItemList.css';
import { useAppDispatch } from '../../hooks/hooks';
import { addItem } from '../../store/cartSlice';

type Item = {
  id: string;
  meal: string;
  price: number;
  img: string;
  instructions: string;
};

type Props = {
  items: Item[];
};

export const ItemList: React.FC<Props> = ({ items }) => {
  const dispatch = useAppDispatch();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (id: string, value: string) => {
    setQuantities(prev => ({
      ...prev,
      [id]: parseInt(value, 10),
    }));
  };

  const getQuantity = (id: string): number => {
    return quantities[id] || 1;
  };

  const handleSubmit = (
    e: React.FormEvent,
    id: string,
    meal: string,
    price: number
  ) => {
    e.preventDefault();
    const quantity = getQuantity(id);
    dispatch(addItem({ id, meal, price, quantity }));
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
