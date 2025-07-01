// src/Page/Cart.tsx
import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { OrderPage } from '../components/OrderPage/OrderPage';

const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <OrderPage />
      <Footer />
    </>
  );
};

export default Cart;
