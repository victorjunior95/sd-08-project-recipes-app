import React from 'react';
import renderWithRouter from './helpers/renderWithRouter';
import { fireEvent } from '@testing-library/react';
import ExplorerFoodsDrinks from '../pages/ExplorerFoodsDrinks/ExplorerFoodsDrinks';

describe('1 - Implemente os elementos da tela de explorar bebidas ou comidas respeitando os atributos descritos no protótipo', () => {

  it('Tem os data-testids corretos para a tela de explorar comidas', async () => {
    const { findByTestId  } = renderWithRouter(<ExplorerFoodsDrinks title="Explorar Comidas" visible={ false } />);

    expect(await findByTestId(`explore-by-ingredient`)).toBeInTheDocument();
    expect(await findByTestId(`explore-by-area`)).toBeInTheDocument();
    expect(await findByTestId(`explore-surprise`)).toBeInTheDocument();

    expect(await findByTestId(`explore-by-ingredient`)).toHaveTextContent('Por Ingredientes');
    expect(await findByTestId(`explore-by-area`)).toHaveTextContent('Por Local de Origem');
    expect(await findByTestId(`explore-surprise`)).toHaveTextContent('Me Surpreenda!');
  });

  it.skip('Tem os data-testids corretos para a tela de explorar bebidas', async () => {
    const { findByTestId  } = renderWithRouter(<ExplorerFoodsDrinks title="Explorar Bebidas" visible={ false } />);

    expect(await findByTestId(`explore-by-ingredient`)).toBeInTheDocument();
    expect(await findByTestId(`explore-by-area`)).toBeInTheDocument();
    expect(await findByTestId(`explore-surprise`)).toBeInTheDocument();

    expect(await findByTestId(`explore-by-ingredient`)).toHaveTextContent('Por Ingredientes');
    expect(await findByTestId(`explore-by-area`)).toHaveTextContent('Por Local de Origem');
    expect(await findByTestId(`explore-surprise`)).toHaveTextContent('Me Surpreenda!');
  });
});

describe('2 - Redirecione a pessoa usuária ao clicar em "Por Ingredientes", a rota deve mudar para a tela de explorar por ingredientes', () => {
  it('Ao clicar no botão "Por Ingredientes" da tela de explorar comidas a rota muda para a página de explorar comidas por ingrediente', async () => {
    const { findByTestId, history  } = renderWithRouter(<ExplorerFoodsDrinks title="Explorar Comidas" visible={ false } />);

    const exploreByIngredientButton = await findByTestId(`explore-by-ingredient`)

    fireEvent.click(exploreByIngredientButton)

    const { pathname } = history.location;
    expect(pathname).toBe('/explorar/comidas/ingredientes');
  });

  it('Ao clicar no botão "Explorar Bebidas" da tela de explorar bebidas a rota muda para a página de explorar bebidas por ingrediente', async () => {
    const { findByTestId, history  } = renderWithRouter(<ExplorerFoodsDrinks title="Explorar Bebidas" visible={ false } />);

    const exploreByIngredientButton = await findByTestId(`explore-by-ingredient`)

    fireEvent.click(exploreByIngredientButton)

    const { pathname } = history.location;
    expect(pathname).toBe('/explorar/bebidas/ingredientes');
  });
});

describe('3 - Redirecione a pessoa usuária ao clicar em "Por Local de Origem", a rota deve mudar para tela de explorar por local de origem', () => {
  it('A rota deve mudar para tela de explorar por local de origem', async () => {
    const { findByTestId, history  } = renderWithRouter(<ExplorerFoodsDrinks title="Explorar Comidas" visible={ false } />);

    const exploreByAreaButton = await findByTestId(`explore-by-area`)

    fireEvent.click(exploreByAreaButton)

    const { pathname } = history.location;
    expect(pathname).toBe('/explorar/comidas/area');
  });
});

// describe('4 - Redirecione a pessoa usuária ao clicar em "Me Surpreenda!", a rota deve mudar para a tela de detalhes de uma receita, que deve ser escolhida de forma aleatória através da API', () => {
//   it('Ao clicar no botão "Por Ingredientes" da tela de explorar comidas a rota muda para a página de detalhes de uma comida aleatória', async () => {
//     const { findByTestId, history  } = renderWithRouter(<ExplorerFoodsDrinks title="Explorar Bebidas" visible={ false } />);

//     const onBeforeLoad = (win) => {
//       win.fetch = fetchMock;
//     }
//     onBeforeLoad(history)

//     const exploreSurpriseButton = await findByTestId(`explore-surprise`)

//     fireEvent.click(exploreSurpriseButton)

//     const { pathname } = history.location;
//     expect(pathname).toBe('/');
//   });

//   // it('Ao clicar no botão "Explorar Bebidas" da tela de explorar bebidas a rota muda para a página de detalhes de uma bebida aleatória', () => {
//   //   cy.visit('http://localhost:3000/explorar/bebidas', {
//   //     onBeforeLoad(win) {
//   //       win.fetch = fetchMock;
//   //     },
//   //   });

//   //   cy.get('[data-testid="explore-surprise"]').click();
//   //   cy.location().should((loc) => expect(loc.pathname).to.eq('/bebidas/178319'));
//   // });
// });

