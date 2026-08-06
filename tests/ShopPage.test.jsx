import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useOutletContext } from 'react-router';
import ShopPage from '../src/pages/ShopPage';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');

  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('ShopPage', () => {
  it('shows the loading spinner while fetching products', () => {
    useOutletContext.mockReturnValue({
      products: null,
      setProducts: vi.fn(),
    });

    vi.stubGlobal(
      'fetch',
      vi.fn(() => new Promise(() => {})),
    );

    render(<ShopPage />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('shows an error message when the fetch fails', async () => {
    useOutletContext.mockReturnValue({
      products: null,
      setProducts: vi.fn(),
    });

    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new Error('Network error')),
    );

    render(<ShopPage />);

    expect(
      await screen.findByRole('heading', {
        name: 'Something went wrong',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Failed to load products. Please try again later.'),
    ).toBeInTheDocument();
  });
});
