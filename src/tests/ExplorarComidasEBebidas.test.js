import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import ExplorarComidasEBebidas from '../pages/ExplorarComidasEBebidas';

describe('Teste o componente Explorar Comidas e Bebidas', () => {
  it('Existem 6 botões na tela', () => {
    renderWithRouter(<ExplorarComidasEBebidas />);
    const buttonsOnScreen = 6;

    const botões = screen.getAllByRole('button');
    expect(botões).toHaveLength(buttonsOnScreen);
  });

  it('Testar Botão de ingredientes', () => {
    const { history } = renderWithRouter(<ExplorarComidasEBebidas />);
    history.push('/explorar/comidas');

    const botãoIngredientes = screen.getByText('Por Ingredientes');
    userEvent.click(botãoIngredientes);

    expect(history.location.pathname).toBe('/explorar/comidas/ingredientes');
  });

  it.only('Testar Botão de origem', () => {
    const { history } = renderWithRouter(<ExplorarComidasEBebidas />, {
      route: '/explorar/comidas',
    });

    const botãoOrigem = screen.getByText('Por Local de Origem');
    userEvent.click(botãoOrigem);

    expect(history.location.pathname).toBe('/explorar/comidas/ingredientes');
  });
});
