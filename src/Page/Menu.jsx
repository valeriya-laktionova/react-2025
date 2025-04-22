import React, { Component } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MenuDisplay } from '../components/MenuSection/MenuSection';

export class Menu extends Component {
  calculateItemQuantity = () => {
    const { basketData } = this.props;
    return basketData.reduce((sum, item) => sum + item.quantity, 0);
  };

  render() {
    const { basketData, onAdd } = this.props;
    const totalItemCount = this.calculateItemQuantity();

    return (
      <div>
        <Header cartCount={totalItemCount} />
        <MenuDisplay cartItems={basketData} addItem={onAdd} />
        <Footer />
      </div>
    );
  }
}
