import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import { describe, expect } from 'vitest';

describe('navigation between pages works correctly', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Click on the link to navigate to the Shop page
  fireEvent.click(screen.getByText('Shop'));
  expect(screen.getByText('ShopPage')).toBeInTheDocument();

  // Click on the link to navigate to the Cart page
  fireEvent.click(screen.getByText('Cart'));
  expect(screen.getByText('CartPage')).toBeInTheDocument();

  // You can add more navigation tests here for other pages
});
