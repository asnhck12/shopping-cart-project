import { render, screen, fireEvent } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import routesConfig from '../../routeConfig';

describe('Navigation between pages works correctly', () => {
    it('opens onto homepage', () => {
      const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/']
      })
      render(<RouterProvider router={router} /> )
      
          expect(screen.getByText('Welcome to ShopHere, we have great items for great prices!')).toBeInTheDocument();
        });


  it('navigates to the Shop page', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/']
    })
    render(<RouterProvider router={router} /> )
 
    fireEvent.click(screen.getByText('Shop'));
    const addToCart = screen.getByText('Home');
    expect(addToCart).toBeInTheDocument();
  });

  it('navigates to the Cart page', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/']
    })
    render(<RouterProvider router={router} /> )

    fireEvent.click(screen.getByAltText('Shopping Cart'));
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });


});
