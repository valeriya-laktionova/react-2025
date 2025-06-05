import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MenuDisplay } from '../components/MenuSection/MenuSection';

type MenuItem = {
  id: string;
  meal: string;
  price: number;
  quantity: number;
};

type MenuProps = {
  cartItems: MenuItem[];
  onAdd: (item: Omit<MenuItem, 'quantity'>, quantity: number) => void;
  totalItemCount: number;
};

export const Menu: React.FC<MenuProps> = ({ cartItems, onAdd, totalItemCount }) => {
  return (
    <div>
      <Header cartCount={totalItemCount} />
      <MenuDisplay cartItems={cartItems} addItem={onAdd} />
      <Footer />
    </div>
  );
};
