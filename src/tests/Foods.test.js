import React from 'react';
import renderWithStoreAndRouter from '../helpers/renderWithStoreAndRouter';
import Foods from '../pages/Foods';

describe('Foods', () => {
  test('É mostrado o testo Foods ao carregar o componente', () => {
    const { getByText } = renderWithStoreAndRouter(<Foods />);
    expect(getByText(/Foods/)).toBeInTheDocument();
  });
});
