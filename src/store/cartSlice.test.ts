import cartReducer, { addItem, removeItem, updateQuantity, resetCart, selectTotalQuantity } from './cartSlice';
import { CartProduct } from './menuItems';

describe('cartSlice', () => {
  const initialState = { items: [] };

  const product: CartProduct = {
    id: '1',
    meal: 'Pizza',
    price: 10,
    img: 'pizza.png',
    quantity: 2,
  };

  it('should return the initial state', () => {
    expect(cartReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle addItem (new item)', () => {
    const nextState = cartReducer(initialState, addItem(product));
    expect(nextState.items).toHaveLength(1);
    expect(nextState.items[0]).toEqual(product);
  });

  it('should handle addItem (existing item increases quantity)', () => {
    const state = { items: [product] };
    const nextState = cartReducer(state, addItem({ ...product, quantity: 3 }));
    expect(nextState.items).toHaveLength(1);
    expect(nextState.items[0].quantity).toBe(5);
  });

  it('should handle removeItem', () => {
    const state = { items: [product] };
    const nextState = cartReducer(state, removeItem(product.id));
    expect(nextState.items).toHaveLength(0);
  });

  it('should handle updateQuantity', () => {
    const state = { items: [product] };
    const nextState = cartReducer(state, updateQuantity({ id: product.id, quantity: 7 }));
    expect(nextState.items[0].quantity).toBe(7);
  });

  it('should handle resetCart', () => {
    const state = { items: [product] };
    const nextState = cartReducer(state, resetCart());
    expect(nextState.items).toHaveLength(0);
  });

  it('should select total quantity', () => {
    const state = { cart: { items: [product, { ...product, id: "2", quantity: 3 }] } };
    expect(selectTotalQuantity(state)).toBe(5);
  });
}); 