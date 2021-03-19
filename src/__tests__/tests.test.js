import React from 'react';
import renderWithRouter from '../configs/renderWithRouter';
import App from '../App';

describe('Renders the App and Login Page', () => {
  test('Farewell, front-end', () => {
    const { getByText } = renderWithRouter(<App />);
    const linkElement = getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  });
});
