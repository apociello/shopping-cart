import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from '../src/components/Header.jsx';

describe('Header Cart', () => {
  it('should render the number of items in the cart', () => {
    render(
      <MemoryRouter>
        <Header cartItems={[{ quantity: 2 }, { quantity: 1 }]} />
      </MemoryRouter>,
    );

    const badge = screen.getByText('3');
    expect(badge).toBeInTheDocument();
  });

  it('should hide the cart badge when there are no items', () => {
    render(
      <MemoryRouter>
        <Header cartItems={[]} />
      </MemoryRouter>,
    );

    const badge = screen.getByText('0');
    expect(badge).not.toBeVisible();
  });
});
