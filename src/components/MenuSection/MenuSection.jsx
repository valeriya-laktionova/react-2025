import React, { useState, useEffect } from 'react';
import './MenuSection.css';
import { Button } from '../Button/Button';
import { ItemList } from '../ItemList/ItemList';

export const MenuDisplay = ({ addItem }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');
        const data = await res.json();
        setMenuItems(data);
      } catch (err) {
        console.error('Error fetching meals:', err);
      }
    };

    fetchMeals();
  }, []);

  const handleSeeMore = () => {
    setVisibleItems(prevVisible => prevVisible + 6);
  };

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

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

        <ItemList
          items={filteredItems.slice(0, visibleItems)}
          addItem={addItem}
        />

        {visibleItems < filteredItems.length && (
          <Button variant="see-more" onClick={handleSeeMore}>
            See more
          </Button>
        )}
      </section>
    </div>
  );
};
