import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import ExplorarIngredientes from '../pages/ExplorarIngredientes';

const PAGINA_TESTE_COMIDA = '/explorar/comidas/ingredientes';
const PAGINA_TESTE_BEBIDA = '/explorar/bebidas/ingredientes';

describe('Teste o componente Explorar Comidas e Bebidas', () => {
  it('Existem 4 botões na tela', () => {
    renderWithRouter(<ExplorarIngredientes />, [PAGINA_TESTE_COMIDA]);
    const buttonsOnScreen = 4;

    const botões = screen.getAllByRole('button');
    expect(botões).toHaveLength(buttonsOnScreen);
  });

  it('Testar Botão de ingredientes', () => {
    renderWithRouter(
      <ExplorarIngredientes />,
      [PAGINA_TESTE_COMIDA],
    );

    const botãoIngredientes = screen.getByText('Chicken');
    userEvent.click(botãoIngredientes);
  });
});
