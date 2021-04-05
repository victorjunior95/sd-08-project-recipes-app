/* eslint-disable max-lines */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
// import renderWithRouter from '../renderWithRouter';
import App from '../App';

const DTId = {
  headerBtn: 'search-top-btn',
  searchInput: 'search-input',
  ingredient: 'ingredient-search-radio',
  name: 'name-search-radio',
  firstLetter: 'first-letter-search-radio',
  exec: 'exec-search-btn',
};

afterEach(() => jest.clearAllMocks());

describe('13 - Implemente os elementos da barra de busca respeitando'
  + ' os atributos descritos no protótipo', () => {
  it('Tem os data-testids tanto da barra de busca quanto de todos os radio-buttons',
    () => {
      render(
        <MemoryRouter initialEntries={ ['/comidas'] }>
          <App />
        </MemoryRouter>,
      );

      const headerSearchBtn = screen.getByTestId(DTId.headerBtn);
      userEvent.click(headerSearchBtn);

      screen.getByTestId(DTId.searchInput);
      screen.getByTestId(DTId.ingredient);
      screen.getByTestId(DTId.name);
      screen.getByTestId(DTId.firstLetter);
      screen.getByTestId(DTId.exec);
    });
});

describe('14 - Posicione a barra logo abaixo do header e implemente 3 radio buttons:'
  + ' Ingrediente, Nome e Primeira letra', () => {
  it('Se o radio selecionado for Ingrediente, a busca na API é feita'
    + ' corretamente pelo ingrediente', () => {
    render(
      <MemoryRouter initialEntries={ ['/comidas'] }>
        <App />
      </MemoryRouter>,
    );

    const headerSearchBtn = screen.getByTestId(DTId.headerBtn);
    userEvent.click(headerSearchBtn);

    const ingredientRadio = screen.getByTestId(DTId.ingredient);
    userEvent.click(ingredientRadio);

    const searchInput = screen.getByTestId(DTId.searchInput);
    userEvent.type(searchInput, 'food');

    const execBtn = screen.getByTestId(DTId.exec);
    userEvent.click(execBtn);

    jest.spyOn(global, 'fetch');

    expect(global.fetch)
      .toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=food');
  });

  it('Se o radio selecionado for Ingrediente, a busca na API é feita'
    + ' corretamente pelo ingrediente', () => {
    render(
      <MemoryRouter initialEntries={ ['/comidas'] }>
        <App />
      </MemoryRouter>,
    );

    const headerSearchBtn = screen.getByTestId(DTId.headerBtn);
    userEvent.click(headerSearchBtn);

    const ingredientRadio = screen.getByTestId(DTId.ingredient);
    userEvent.click(ingredientRadio);

    const searchInput = screen.getByTestId(DTId.searchInput);
    userEvent.type(searchInput, 'chicken');

    const execBtn = screen.getByTestId(DTId.exec);
    userEvent.click(execBtn);

    jest.spyOn(global, 'fetch');

    expect(global.fetch)
      .toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken');
  });

  it('Se o radio selecionado for Nome, a busca na API é feita'
    + ' corretamente pelo nome', () => {
    render(
      <MemoryRouter initialEntries={ ['/comidas'] }>
        <App />
      </MemoryRouter>,
    );

    const headerSearchBtn = screen.getByTestId(DTId.headerBtn);
    userEvent.click(headerSearchBtn);

    const nameRadio = screen.getByTestId(DTId.name);
    userEvent.click(nameRadio);

    const searchInput = screen.getByTestId(DTId.searchInput);
    userEvent.type(searchInput, 'soup');

    const execBtn = screen.getByTestId(DTId.exec);
    userEvent.click(execBtn);

    const fetch = jest.spyOn(global, 'fetch');

    expect(fetch)
      .toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=soup');
  });

  it('Se o radio selecionado for Primeira letra, a busca na API é feita'
    + ' corretamente pela primeira letra', () => {
    render(
      <MemoryRouter initialEntries={ ['/comidas'] }>
        <App />
      </MemoryRouter>,
    );

    const headerSearchBtn = screen.getByTestId(DTId.headerBtn);
    userEvent.click(headerSearchBtn);

    const firstLetterRadio = screen.getByTestId(DTId.firstLetter);
    userEvent.click(firstLetterRadio);

    const searchInput = screen.getByTestId(DTId.searchInput);
    userEvent.type(searchInput, 'a');

    const execBtn = screen.getByTestId(DTId.exec);
    userEvent.click(execBtn);

    const fetch = jest.spyOn(global, 'fetch');

    expect(fetch)
      .toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  });

  it('Se o radio selecionado for Primeira letra e a busca na API for feita com mais de'
  + ' uma letra, deve-se exibir um alert', () => {
    render(
      <MemoryRouter initialEntries={ ['/comidas'] }>
        <App />
      </MemoryRouter>,
    );

    const headerSearchBtn = screen.getByTestId(DTId.headerBtn);
    userEvent.click(headerSearchBtn);

    const firstLetterRadio = screen.getByTestId(DTId.firstLetter);
    userEvent.click(firstLetterRadio);

    const searchInput = screen.getByTestId(DTId.searchInput);
    userEvent.type(searchInput, 'aaa');

    const execBtn = screen.getByTestId(DTId.exec);
    userEvent.click(execBtn);

    const alert = jest.spyOn(global, 'alert');

    expect(alert)
      .toHaveBeenCalledWith('Sua busca deve conter somente 1 (um) caracter');
  });
});

describe('15 - Busque na API de comidas caso a pessoa esteja na página de comidas'
  + ' e na de bebidas caso esteja na de bebidas', () => {
  it('Na tela de bebidas, se o radio selecionado for Ingrediente, a busca na API'
    + ' é feita corretamente pelo ingrediente', () => {
    render(
      <MemoryRouter initialEntries={ ['/bebidas'] }>
        <App />
      </MemoryRouter>,
    );

    const headerSearchBtn = screen.getByTestId(DTId.headerBtn);
    userEvent.click(headerSearchBtn);

    const ingredientRadio = screen.getByTestId(DTId.ingredient);
    userEvent.click(ingredientRadio);

    const searchInput = screen.getByTestId(DTId.searchInput);
    userEvent.type(searchInput, 'lemon');

    const execBtn = screen.getByTestId(DTId.exec);
    userEvent.click(execBtn);

    const fetch = jest.spyOn(global, 'fetch');

    expect(fetch)
      .toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon');
  });

  it('Na tela de bebidas, se o radio selecionado for Nome, a busca na API'
    + ' é feita corretamente pelo nome', () => {
    render(
      <MemoryRouter initialEntries={ ['/bebidas'] }>
        <App />
      </MemoryRouter>,
    );

    const headerSearchBtn = screen.getByTestId(DTId.headerBtn);
    userEvent.click(headerSearchBtn);

    const ingredientRadio = screen.getByTestId(DTId.name);
    userEvent.click(ingredientRadio);

    const searchInput = screen.getByTestId(DTId.searchInput);
    userEvent.type(searchInput, 'gin');

    const execBtn = screen.getByTestId(DTId.exec);
    userEvent.click(execBtn);

    const fetch = jest.spyOn(global, 'fetch');

    expect(fetch)
      .toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin');
  });

  it('Na tela de bebidas, se o radio selecionado for Primeira letra, a busca na API'
    + ' é feita corretamente pelo primeira letra', () => {
    render(
      <MemoryRouter initialEntries={ ['/bebidas'] }>
        <App />
      </MemoryRouter>,
    );

    const headerSearchBtn = screen.getByTestId(DTId.headerBtn);
    userEvent.click(headerSearchBtn);

    const ingredientRadio = screen.getByTestId(DTId.firstLetter);
    userEvent.click(ingredientRadio);

    const searchInput = screen.getByTestId(DTId.searchInput);
    userEvent.type(searchInput, 'a');

    const execBtn = screen.getByTestId(DTId.exec);
    userEvent.click(execBtn);

    const fetch = jest.spyOn(global, 'fetch');

    expect(fetch)
      .toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
  });

  it('Na tela de bebidas, se o radio selecionado for Primeira letra e a busca na API'
    + ' for feita com mais de uma letra, deve-se exibir um alert', () => {
    render(
      <MemoryRouter initialEntries={ ['/bebidas'] }>
        <App />
      </MemoryRouter>,
    );

    const headerSearchBtn = screen.getByTestId(DTId.headerBtn);
    userEvent.click(headerSearchBtn);

    const ingredientRadio = screen.getByTestId(DTId.firstLetter);
    userEvent.click(ingredientRadio);

    const searchInput = screen.getByTestId(DTId.searchInput);
    userEvent.type(searchInput, 'aaa');

    const execBtn = screen.getByTestId(DTId.exec);
    userEvent.click(execBtn);

    const alert = jest.spyOn(global, 'alert');

    expect(alert)
      .toHaveBeenCalledWith('Sua busca deve conter somente 1 (um) caracter');
  });
});

describe('16 - Redirecione para a tela de detalhes da receita caso apenas uma receita'
  + ' seja encontrada, com o ID da mesma na URL', () => {
  it('Caso apenas uma comida seja encontrada, deve-se ir para'
  + ' sua rota de detalhes', () => {
    render(
      <MemoryRouter initialEntries={ ['/comidas'] }>
        <App />
      </MemoryRouter>,
    );
  });
});
