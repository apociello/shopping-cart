import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useOutletContext, useNavigate } from 'react-router';
import CartPage from '../src/pages/CartPage';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');

  return {
    ...actual,
    useOutletContext: vi.fn(),
    useNavigate: vi.fn(),
  };
});

describe('CartPage', () => {
  it('calculates the subtotal correctly', () => {
    useOutletContext.mockReturnValue({
      products: [
        { id: 1, title: 'Mouse', price: 10, image: 'mouse.jpg' },
        { id: 2, title: 'Keyboard', price: 20, image: 'keyboard.jpg' },
      ],
      cartItems: [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 1 },
      ],
      setCartItems: vi.fn(),
    });

    useNavigate.mockReturnValue(vi.fn());

    render(<CartPage />);

    const subtotal = screen.getByLabelText('Subtotal');
    expect(subtotal).toHaveTextContent('40.00 €');
  });

  it('empties the cart and navigates to Home when clicking Pay', async () => {
    const user = userEvent.setup();
    const setCartItems = vi.fn();
    const navigate = vi.fn();

    useOutletContext.mockReturnValue({
      products: [{ id: 1, title: 'Mouse', price: 10, image: 'mouse.jpg' }],
      cartItems: [{ id: 1, quantity: 2 }],
      setCartItems,
    });

    useNavigate.mockReturnValue(navigate);

    // Prevent alert during test
    vi.stubGlobal('alert', vi.fn());

    render(<CartPage />);

    await user.click(
      screen.getByRole('button', {
        name: 'Pay',
      }),
    );

    expect(setCartItems).toHaveBeenCalledWith([]);
    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('shows the empty cart message when there are no products', () => {
    useOutletContext.mockReturnValue({
      products: [],
      cartItems: [],
      setCartItems: vi.fn(),
    });

    render(<CartPage />);

    expect(
      screen.getByRole('heading', {
        name: 'Your cart is empty',
      }),
    ).toBeInTheDocument();
  });
});
