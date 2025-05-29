import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './Page/Menu';
import { HomePage } from './Page/Home';
import { Login } from './Page/Login';

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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage basketData={basket} onAdd={handleAddToCart} totalItemCount={totalItemCount} />}
        />
        <Route
          path="/menu"
          element={<Menu basketData={basket} onAdd={handleAddToCart} totalItemCount={totalItemCount} />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </Router>
  );
};

export default App;
