import React, { useMemo } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MenuDisplay } from '../components/MenuSection/MenuSection';

export const Menu = ({ cartItems, onAdd, totalItemCount }) => {
  return (
    <div>
      <Header cartCount={totalItemCount} />
      <MenuDisplay cartItems={cartItems} addItem={onAdd} />
      <Footer />
    </div>
  );
};
