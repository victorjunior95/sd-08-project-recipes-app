import React from 'react';
import { screen } from '@testing-library/dom';
import { LocalStorageMock } from '@react-mock/localstorage';
// import userEvent from '@testing-library/user-event';
import renderWithReduxandRouter from '../renderWithReduxandRouter';
import FavoritePageLikeBtn from '../components/FavoritePageLikeBtn';
import { favoriteStorageRecipes } from '../TestsMocks/mockStorageRecipes';

const ENTRIE_FAVORITE = '/receitas-favoritas';

describe('FavoritePageLikeBtn.js', () => {
  test('if something', () => {
    const INITIAL_ENTRIES = {
      initialEntries: [ENTRIE_FAVORITE],
      initialState: {},
    };

    const dataTestId = '0-horizontal-favorite-btn';
    const recipeId = '52771';
    const reRender = false;
    const setReRender = jest.fn(() => localStorage.setItem('favoriteRecipes', ''));

    renderWithReduxandRouter(
      <LocalStorageMock
        items={ {
          favoriteRecipes: JSON
            .stringify(favoriteStorageRecipes[0]),
        } }
      >
        <FavoritePageLikeBtn
          dataTestId={ dataTestId }
          recipeId={ recipeId }
          reRender={ reRender }
          setReRender={ setReRender }
        />
      </LocalStorageMock>, INITIAL_ENTRIES,
    );

    const card = screen.getByTestId(dataTestId);
    const button = screen.getByRole('button');
    expect(card).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
