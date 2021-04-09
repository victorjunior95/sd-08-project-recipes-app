import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Bebidas from '../pages/Bebidas';
import Provider from '../context/Provider';
import fetchMock from '../mocks/fetch';



describe('Bebidas Page', () => {
  beforeEach(() => {
    fetchMock();
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify({ email: 'hugostoso@bol.com.br' , mealsToken: 1 , cocktailsToken: 1})),
        setItem: jest.fn(() => null),
        clear: jest.fn(() => null),
      },
      writable: true,
    });
  });


    const setup = async ()  => {
      const history = createMemoryHistory({initialEntries: ['/bebidas']});
      const utils = render(
        <Provider>
          <Router  history={history}>
               <Bebidas  />
          </Router>
        </Provider>
      );
      const profileTopButton = await utils.findByTestId('profile-top-btn');
      const pageTitle =  await utils.findByTestId('page-title');
      const searchTopButton =  await utils.findByTestId('search-top-btn');

      return {
        profileTopButton, pageTitle, searchTopButton, history, utils: utils,
      } 
    }

  test('9 - Implemente os elementos do header na tela principal de receitas, respeitando os atributos descritos no protótipo', async () => {
    const {profileTopButton, pageTitle, searchTopButton} = await setup();
    expect(profileTopButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchTopButton).toBeInTheDocument();
  });

  test('10 - Implemente um ícone para a tela de perfil, um título e um ícone para a busca, caso exista no protótipo', async () => {
    const { pageTitle} = await setup();
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent('Bebidas')
});

test('17 - Mostre as receitas em cards caso mais de uma receita seja encontrada', async () => {
    const { searchTopButton, utils } = await setup();
    fireEvent.click(searchTopButton);
    const inputSearch = await utils.findByTestId('search-input');
    const radioIngredients =  await utils.findByTestId('ingredient-search-radio');
    const radioName =  await utils.findByTestId('name-search-radio');
    const radioFirstLetter = await utils.findByTestId('first-letter-search-radio');
    const execSearchButton =  await utils.findByTestId('exec-search-btn');
    expect(inputSearch).toBeInTheDocument();
    expect(radioIngredients).toBeInTheDocument();
    expect(radioName).toBeInTheDocument();
    expect(radioFirstLetter).toBeInTheDocument();
    expect(execSearchButton).toBeInTheDocument();
    fireEvent.change(inputSearch, {target: { value: 'gin'}})
    fireEvent.click(radioName);
    fireEvent.click(execSearchButton);
    expect(fetchMock).toHaveBeenCalled; 
    //https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin
    // const recipeCard0 =  await utils.findByTestId('0-recipe-card');
    // const imgCard0 = await utils.findByTestId('0-card-img');
    // const nameCard0 =  await utils.findByTestId('0-card-name');
    // const recipeCard12 =  await utils.findByTestId('11-recipe-card');
    // const imgCard12 = await utils.findByTestId('11-card-img');
    // const nameCard12 =  await utils.findByTestId('11-card-name');
    // const recipeCard13 =  await utils.queryByTestId('12-recipe-card');
    // const imgCard13 = await utils.queryByTestId('12-card-img');
    // const nameCard13 =  await utils.queryByTestId('12-card-name');
    // expect(recipeCard12).toBeInTheDocument();
    // expect(imgCard12).toBeInTheDocument();
    // expect(nameCard12).toBeInTheDocument();
    // expect(recipeCard13).not.toBeInTheDocument();
    // expect(await utils.findByTestId('0-recipe-card')).toBeInTheDocument();
    // expect(await utils.findByTestId('0-card-img')).toBeInTheDocument();
    // expect(await utils.findByTestId('0-card-name')).toBeInTheDocument();
    // expect(imgCard13).not.toBeInTheDocument();
    // expect(nameCard13).not.toBeInTheDocument();
    expect(await utils.queryByTestId('0-recipe-card')).toBeInTheDocument();
    expect(await utils.queryByTestId('0-card-img')).toBeInTheDocument();
    expect(await utils.queryByTestId('0-card-name')).toBeInTheDocument();
    expect(await utils.queryByTestId('11-recipe-card')).toBeInTheDocument();
    expect(await utils.queryByTestId('11-card-img')).toBeInTheDocument();
    expect(await utils.queryByTestId('11-card-name')).toBeInTheDocument();
    expect(await utils.queryByTestId('12-recipe-card')).not.toBeInTheDocument();
    expect(await utils.queryByTestId('12-card-img')).not.toBeInTheDocument();
    expect(await utils.queryByTestId('12-card-name')).not.toBeInTheDocument();
  });

test('26 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card', async () => {
    const { utils, history } = await setup();
    expect(fetchMock).toHaveBeenCalled(); 
    const categoryFilter0 = await utils.findByTestId('Ordinary Drink-category-filter');
    const categoryFilter1 = await utils.findByTestId('Cocktail-category-filter');
    const categoryFilter2 = await utils.findByTestId('Milk / Float / Shake-category-filter');
    const categoryFilter3 = await utils.findByTestId('Other/Unknown-category-filter');
    const categoryFilter4 = await utils.findByTestId('Cocoa-category-filter');
    const categoryFilterAll = await utils.findByTestId('All-category-filter');
    expect(categoryFilter0).toBeInTheDocument();
    expect(categoryFilter1).toBeInTheDocument();
    expect(categoryFilter2).toBeInTheDocument();
    expect(categoryFilter3).toBeInTheDocument();
    expect(categoryFilter4).toBeInTheDocument();
    fireEvent.click(categoryFilter0);
    expect(await utils.queryByTestId('0-recipe-card')).toBeInTheDocument();
    expect(await utils.queryByTestId('0-card-img')).toBeInTheDocument();
    expect(await utils.queryByTestId('0-card-name')).toBeInTheDocument();
    expect(await utils.queryByTestId('11-recipe-card')).toBeInTheDocument();
    expect(await utils.queryByTestId('11-card-img')).toBeInTheDocument();
    expect(await utils.queryByTestId('11-card-name')).toBeInTheDocument();
    expect(await utils.queryByTestId('12-recipe-card')).not.toBeInTheDocument();
    expect(await utils.queryByTestId('12-card-img')).not.toBeInTheDocument();
    expect(await utils.queryByTestId('12-card-name')).not.toBeInTheDocument();
            // const execSearchButton =  await utils.findByTestId('exec-search-btn');
    // expect(inputSearch).toBeInTheDocument();
// const radioIngredients =  await utils.findByTestId('ingredient-search-radio');
    // fireEvent.click(exploreBottomButton);
    // expect(history.location.pathname).toBe('/explorar');
  });
})