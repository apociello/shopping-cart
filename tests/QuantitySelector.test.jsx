import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useOutletContext } from 'react-router';
import QuantitySelector from '../src/components/QuantitySelector';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');

  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('QuantitySelector', () => {
  it('calls updateItem with quantity + 1 when clicking "+"', async () => {
    const user = userEvent.setup();
    const updateItem = vi.fn();

    useOutletContext.mockReturnValue({
      updateItem,
      deleteItem: vi.fn(),
    });

    render(<QuantitySelector id={1} quantity={2} />);

    const increaseButton = screen.getByRole('button', {
      name: 'Increase quantity',
    });

    await user.click(increaseButton);

    expect(updateItem).toHaveBeenCalledWith(1, 3);
  });

  it('calls updateItem with quantity - 1 when clicking "-" and quantity is greater than 1', async () => {
    const user = userEvent.setup();
    const updateItem = vi.fn();

    useOutletContext.mockReturnValue({
      updateItem,
      deleteItem: vi.fn(),
    });

    render(<QuantitySelector id={1} quantity={2} />);

    const decreaseButton = screen.getByRole('button', {
      name: 'Decrease quantity',
    });

    await user.click(decreaseButton);

    expect(updateItem).toHaveBeenCalledWith(1, 1);
  });

  it('calls deleteItem when clicking "-" and quantity is 1', async () => {
    const user = userEvent.setup();
    const deleteItem = vi.fn();

    useOutletContext.mockReturnValue({
      updateItem: vi.fn(),
      deleteItem,
    });

    render(<QuantitySelector id={1} quantity={1} />);

    const removeButton = screen.getByRole('button', {
      name: 'Remove item',
    });

    await user.click(removeButton);

    expect(deleteItem).toHaveBeenCalledWith(1);
  });
});
