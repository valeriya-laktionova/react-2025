import React, { Component } from 'react';
import { Menu } from './Page/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basket: [],
    };
  }

  handleAddToCart = (product, quantity = 1) => {
    this.setState((prevState) => {
      const foundProduct = prevState.basket.find((entry) => entry.id === product.id);

      if (foundProduct) {
        return {
          basket: prevState.basket.map((entry) =>
            entry.id === product.id
              ? { ...entry, quantity: entry.quantity + quantity }
              : entry
          ),
        };
      }

      return {
        basket: [...prevState.basket, { ...product, quantity }],
      };
    });
  };

  render() {
    const { basket } = this.state;

    return (
      <Menu
        basketData={basket}
        onAdd={this.handleAddToCart}
      />
    );
  }
}

export default App;
