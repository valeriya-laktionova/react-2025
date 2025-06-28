import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OrderPage } from '../components/OrderPage/OrderPage';
import { removeItem, updateQuantity, resetCart } from '../store/cartSlice';

const mockDispatch = jest.fn();
jest.mock('../hooks/hooks', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: () => mockDispatch,
}));

jest.mock('../store/cartSlice', () => ({
  removeItem: jest.fn((id) => ({ type: 'cart/removeItem', payload: id })),
  updateQuantity: jest.fn(({ id, quantity }) => ({ type: 'cart/updateQuantity', payload: { id, quantity } })),
  resetCart: jest.fn(() => ({ type: 'cart/resetCart' })),
}));

window.alert = jest.fn();

const mockUseAppSelector = require('../hooks/hooks').useAppSelector;

describe('OrderPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders empty cart message', () => {
    mockUseAppSelector.mockReturnValue([]);

    render(<OrderPage />);

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });

  it('renders cart items and updates quantity', () => {
    mockUseAppSelector.mockReturnValue([
      { id: '1', meal: 'Pizza', price: 12.99, quantity: 1, img: '/pizza.jpg' },
    ]);

    render(<OrderPage />);

    expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();

    fireEvent.change(screen.getByDisplayValue('1'), { target: { value: '2' } });

    expect(updateQuantity).toHaveBeenCalledWith({ id: '1', quantity: 2 });
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('removes an item from the cart', () => {
    mockUseAppSelector.mockReturnValue([
      { id: '1', meal: 'Pizza', price: 12.99, quantity: 1, img: '/pizza.jpg' },
    ]);

    render(<OrderPage />);

    fireEvent.click(screen.getByRole('button', { name: /Remove item/i }));

    expect(removeItem).toHaveBeenCalledWith('1');
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('submits order with valid address', () => {
    mockUseAppSelector.mockReturnValue([
      { id: '1', meal: 'Pizza', price: 12.99, quantity: 1, img: '/pizza.jpg' },
    ]);

    render(<OrderPage />);

    fireEvent.change(screen.getByLabelText(/Street/i), { target: { value: 'Main St' } });
    fireEvent.change(screen.getByLabelText(/House/i), { target: { value: '42' } });
    fireEvent.click(screen.getByRole('button', { name: /Order/i }));

    expect(resetCart).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Order placed successfully!');
  });

  it('shows alert if address fields are empty', () => {
    mockUseAppSelector.mockReturnValue([
      { id: '1', meal: 'Pizza', price: 12.99, quantity: 1, img: '/pizza.jpg' },
    ]);

    render(<OrderPage />);

    fireEvent.click(screen.getByRole('button', { name: /Order/i }));

    expect(window.alert).toHaveBeenCalledWith('Please enter both street and house.');
    expect(resetCart).not.toHaveBeenCalled();
  });
});
