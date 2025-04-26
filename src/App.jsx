import React, { useState } from 'react';
import { Menu } from './Page/Menu';

const App = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToCart = (product, quantity = 1) => {
    setBasket((prevBasket) => {
      const foundProduct = prevBasket.find((entry) => entry.id === product.id);

      if (foundProduct) {
        return prevBasket.map((entry) =>
          entry.id === product.id
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry
        );
      }

      return [...prevBasket, { ...product, quantity }];
    });
  };

  return (
    <Menu
      basketData={basket}
      onAdd={handleAddToCart}
    />
  );
};

export default App;
