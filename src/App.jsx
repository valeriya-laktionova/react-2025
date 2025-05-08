import React, { useState, useMemo } from 'react';
import { Menu } from './Page/Menu';
import { HomePage } from './Page/Home'; 

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

  const totalItemCount = useMemo(() => {
    return basket.reduce((sum, item) => sum + item.quantity, 0);
  }, [basket]);

  const pathname = window.location.pathname;

  if (pathname === '/menu') {
    return <Menu basketData={basket} onAdd={handleAddToCart} totalItemCount={totalItemCount} />;
  } else {
    return <HomePage basketData={basket} onAdd={handleAddToCart} totalItemCount={totalItemCount} />;
  }
};

export default App;
