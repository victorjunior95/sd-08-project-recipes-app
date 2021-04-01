import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import ReceitasFeitas from '../pages/ReceitasFeitas';

const doneRecipes = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

beforeEach(() => {
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  // window.getSelection = () => ({ removeAllRanges: () => {} });
  // (global).document.createRange = () => ({
  //   setStart: () => {},
  //   setEnd: () => {},
  //   commonAncestorContainer: {
  //     nodeName: 'BODY',
  //     ownerDocument: document,
  //   },
  // });
});

afterEach(() => {
  localStorage.clear();
});

describe(`Implemente os elementos da tela de receitas feitas respeitando
  os atributos descritos no protótipo`, () => {
  it('Todos os data-testids estão disponíveis', () => {
    renderWithRouter(<ReceitasFeitas />);

    expect(screen.queryByTestId('filter-by-all-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('filter-by-food-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('filter-by-drink-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('0-horizontal-image')).toBeInTheDocument();
    expect(screen.queryByTestId('0-horizontal-top-text')).toBeInTheDocument();
    expect(screen.queryByTestId('0-horizontal-name')).toBeInTheDocument();
    expect(screen.queryByTestId('0-horizontal-done-date')).toBeInTheDocument();
    expect(screen.queryByTestId('0-horizontal-share-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('0-Pasta-horizontal-tag')).toBeInTheDocument();
    expect(screen.queryByTestId('0-Curry-horizontal-tag')).toBeInTheDocument();
    expect(screen.queryByTestId('1-horizontal-image')).toBeInTheDocument();
    expect(screen.queryByTestId('1-horizontal-top-text')).toBeInTheDocument();
    expect(screen.queryByTestId('1-horizontal-name')).toBeInTheDocument();
    expect(screen.queryByTestId('1-horizontal-done-date')).toBeInTheDocument();
    expect(screen.queryByTestId('1-horizontal-share-btn')).toBeInTheDocument();
  });
});

describe('Testar o botão de compartilhar', () => {
  it('Ao clicar no botão de compartilhar a mensagem "Link copiado!" aparece', () => {
    renderWithRouter(<ReceitasFeitas />);
    const botaoCompartilhar = screen.queryByTestId('0-horizontal-share-btn');

    userEvent.click(botaoCompartilhar);

    const mensagem = screen.getByRole('textarea', {
      'aria-describeBy': 'popover-container',
    });
    expect(mensagem).toBeInTheDocument();
  });

  // it('A URL da tela de detalhes da receita é copiada para o clipboard', () => {
  //   cy.get('[data-testid="0-horizontal-share-btn"]').click();

  //   cy.window().then((win) => {
  //     cy.wrap(win.navigator.clipboard.readText())
  //       .should('eq', 'http://localhost:3000/comidas/52771');
  //   });
  // });
});
