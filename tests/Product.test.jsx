import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useOutletContext } from 'react-router';
import Product from '../src/components/Product';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');

  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('Product', () => {
  it('calls updateItem when clicking "Add to cart"', async () => {
    const user = userEvent.setup();
    const updateItem = vi.fn();

    useOutletContext.mockReturnValue({
      cartItems: [],
      updateItem,
    });

    render(<Product id={1} image="image.jpg" title="Mouse" price={20} />);

    const button = screen.getByRole('button', {
      name: 'Add Mouse to cart',
    });

    await user.click(button);

    expect(updateItem).toHaveBeenCalledWith(1, 1);
  });

  it('renders QuantitySelector when the product is already in the cart', () => {
    useOutletContext.mockReturnValue({
      cartItems: [{ id: 1, quantity: 2 }],
      updateItem: vi.fn(),
      deleteItem: vi.fn(),
    });

    render(<Product id={1} image="image.jpg" title="Mouse" price={20} />);

    expect(
      screen.getByRole('button', {
        name: 'Increase quantity',
      }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('button', {
        name: 'Add Mouse to cart',
      }),
    ).not.toBeInTheDocument();
  });
});
