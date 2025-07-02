import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { Cart } from './CartIcon';
import { useAppSelector } from '../../hooks/hooks';

jest.mock('../../hooks/hooks', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../assets', () => ({
  cartIcon: '/cart-icon.png',
}));

const mockUseAppSelector = useAppSelector as jest.Mock;
const mockNavigate = useNavigate as jest.Mock;

describe('Cart component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders cart icon without count when cart is empty', () => {
    mockUseAppSelector.mockReturnValue(0);
    render(<Cart />);

    const icon = screen.getByAltText(/Cart/i);
    expect(icon).toBeInTheDocument();
    expect(screen.queryByText(/^\d+$/)).not.toBeInTheDocument(); 
  });

  it('renders cart count when items are in the cart', () => {
    mockUseAppSelector.mockReturnValue(3);
    render(<Cart />);

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('navigates to /order when clicked', () => {
    mockUseAppSelector.mockReturnValue(2);
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(<Cart />);

    fireEvent.click(screen.getByRole('button'));
    expect(navigateMock).toHaveBeenCalledWith('/order');
  });
});
