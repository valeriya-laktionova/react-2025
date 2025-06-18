import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './Page/Menu';
import { HomePage } from './Page/Home';
import { Login } from './Page/Login';
import Company from './Page/Company';
import Cart from './Page/Cart'; 
import PrivateRoute from '../src/route/PrivateRoute';

type BasketItem = {
  id: string;
  meal: string;
  price: number;
  quantity: number;
};

const App: React.FC = () => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const handleAddToCart = (product: Omit<BasketItem, 'quantity'>, quantity = 1) => {
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
        <Route path="/" element={<HomePage />} />
        <Route
          path="/menu"
          element={<Menu cartItems={basket} onAdd={handleAddToCart} totalItemCount={totalItemCount} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/company" element={<Company />} />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <Cart /> 
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
