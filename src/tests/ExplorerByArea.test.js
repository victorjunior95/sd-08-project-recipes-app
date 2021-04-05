import React from 'react';
import renderWithRouter from './helpers/renderWithRouter';
import ExplorerByArea from '../pages/ExplorerByArea/ExplorerByArea';
import { screen } from '@testing-library/react';

describe('1 - Verifica os elementos presentes na tela explorar por area', () => {
  test('Verifica se o título está presente e contém o texto "Explorar Origem"', () => {
    const { getByTestId } = renderWithRouter(
      <ExplorerByArea title="Explorar Origem" />,
    );
    const pageTitle = getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle.innerHTML).toBe('Explorar Origem');
  });
});
describe('2 - Verifica se o select que filtra as receitas funciona como o esperado', () => {
  test('Verifica se existe um select para a filtragem das receitas', () => {
    const { getByTestId } = renderWithRouter(
      <ExplorerByArea title="Explorar Origem" />,
    );
    const select = getByTestId('explore-by-area-dropdown');
    expect(select).toBeInTheDocument();
  });
  test('Verifica se existem 12 cards renderizados na tela', async () => {
    renderWithRouter(<ExplorerByArea title="Explorar Origem" />);

    for (let i = 0; i < 12; i += 1) {
      let card = await screen.findByTestId(`${i}-recipe-card`);
      expect(card).toBeInTheDocument();
    }
  });
});
