// Menu.jsx
import React, { useMemo } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MenuDisplay } from '../components/MenuSection/MenuSection';

export const Menu = ({ basketData, onAdd }) => {
  const totalItemCount = useMemo(() => {
    return basketData.reduce((sum, item) => sum + item.quantity, 0);
  }, [basketData]);

  return (
    <div>
      <Header cartCount={totalItemCount} />
      <MenuDisplay cartItems={basketData} addItem={onAdd} />
      <Footer />
    </div>
  );
};
