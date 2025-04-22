import React from "react";
import { Button } from "./Button";


const MenuSection = () => {
  const items = [
    { id: 1, name: "Burger Dreams", price: "$9.20 USD", img: "src/assets/Burger Dreams.png" },
    { id: 2, name: "Burger Waldo", price: "$10.00 USD", img: "src/assets/Burger Waldo.png" },
    { id: 3, name: "Burger Cali", price: "$8.00 USD", img: "src/assets/Burger Cali.png" },
    { id: 4, name: "Burger Bacon Buddy", price: "$9.99 USD", img: "src/assets/Burger Bacon Buddy.png" },
    { id: 5, name: "Burger Spicy", price: "$9.20 USD", img: "src/assets/Burger Spicy.png" },
    { id: 6, name: "Burger Classic", price: "$8.00 USD", img: "src/assets/Burger Classic.png" },
  ];

  return (
    <section className="menu-section">
      <h2 className="menu-title">Browse our menu</h2>
      <p className="menu-description">
        Use our menu to place an order online, or{" "}
        <span title="+1 (234) 567-890" className="tooltip-text">phone</span> our store
        to place a pickup order. Fast and fresh food.
      </p>
      <div className="menu-buttons">
          <Button>Desert</Button>
          <Button>Dinner</Button>
          <Button>Breakfast</Button>
        </div>

      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.img} alt={item.name} className="item-img" />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="item-bottom">
                <input type="number" defaultValue="1" min="1" className="quantity-input" />
                <Button variant="add">Add to cart</Button>
              </div>
            </div>
            <span className="item-price">{item.price}</span>
          </div>
        ))}
        <Button variant="see-more">See more</Button>
      </div>
    </section>
  );
};

export default MenuSection;