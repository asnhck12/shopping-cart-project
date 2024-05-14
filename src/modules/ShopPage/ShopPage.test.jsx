import { describe, it, expect } from 'vitest';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ShopPage from './ShopPage';

describe('the items are listed open', () => {
    it('fetches and displays products', async () => {
        render(<ShopPage />);

        await waitFor(() => {
            expect(screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBeInTheDocument();
            expect(screen.getByText('£109.95')).toBeInTheDocument();

        })
    })
    it('handles quantity changes', async () => {
        render(<ShopPage />);

        await waitFor(() => {
            expect(screen.getByText('White Gold Plated Princess')).toBeInTheDocument();            
        });

        const increaseButton = screen.getAllByText('+')[7];
        const decreaseButton = screen.getAllByText('-')[7];
        const quantityInput = screen.getAllByDisplayValue('1')[7];


        //Increase
        fireEvent.click(increaseButton);
        expect(quantityInput).toHaveValue('2')

        //Decrease
        fireEvent.click(decreaseButton);
        expect(quantityInput).toHaveValue('1')

        //doesnt fall below 1
        fireEvent.click(decreaseButton);
        expect(quantityInput).toHaveValue('1')
    });

    // it('adds items to cart', async () => {
    //     render(<ShopPage />);

    //     await waitFor(() => {
    //         expect(screen.getByText('DANVOUY Womens T Shirt Casual Cotton Short')).toBeInTheDocument();
    //     });

    //     const addToCartButton = screen.getAllByText('Add to Cart')[20];

    //     fireEvent.click(addToCartButton);

    //     //code to test add to cart

    //     expect(screen.getAllByText('Add to Cart')[0]).toBeInTheDocument();
// });
});