import React, { useState } from 'react';
import './MenuSection.css';
import { Button } from '../Button/Button';
import { ItemList } from '../ItemList/ItemList';
import { useFetch } from '../../hooks/useFetch';

type MenuItem = {
  id: string;
  meal: string;
  price: number;
  img: string;
  instructions: string;
  category: string;
};

type MenuDisplayProps = {
  addItem: (item: Omit<MenuItem, 'img' | 'instructions' | 'category'>, quantity: number) => void;
  cartItems?: any[]; 
};

export const MenuDisplay: React.FC<MenuDisplayProps> = ({ addItem }) => {
  const [visibleItems, setVisibleItems] = useState<number>(6);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const {
    data: menuItems,
    loading,
    error,
  } = useFetch<MenuItem[]>('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');

  const handleSeeMore = () => {
    setVisibleItems((prev) => prev + 6);
  };

  const categories: string[] = ['All', ...Array.from(new Set((menuItems ?? []).map(item => item.category)))];

  const filteredItems = selectedCategory === 'All'
    ? (menuItems ?? [])
    : (menuItems ?? []).filter(item => item.category === selectedCategory);

  return (
    <div className="menu-container">
      <section className="menu-block">
        <div className="menu-intro">
          <h2>Browse our menu</h2>
          <p>
            Use our menu to place an order online, or
            <span className="tooltip">
              phone
              <span className="tooltip-text">+370(677)71-4851</span>
            </span>
            our store to place a pickup order. Fast and fresh food.
          </p>
        </div>

        <div className="menu-actions">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleItems(6);
              }}
            >
              {cat}
            </Button>
          ))}
        </div>

        {loading && <p>Loading menu...</p>}
        {error && <p>Error loading menu: {error}</p>}

        {!loading && !error && (
          <>
            <ItemList items={filteredItems.slice(0, visibleItems)} />

            {visibleItems < filteredItems.length && (
              <Button variant="see-more" onClick={handleSeeMore}>
                See more
              </Button>
            )}
          </>
        )}
      </section>
    </div>
  );
};
