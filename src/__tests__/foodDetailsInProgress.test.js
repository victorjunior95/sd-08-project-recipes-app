import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import favoriteRecipes from './mocks/localStorageFavoriteRecipes';
import mockFetch from '../../cypress/mocks/fetch';

import renderWithRouter from './helpers/renderWithRouter';
import FoodDetailsInProgress from '../containers/FoodDetailsInProgress';

describe('FoodDetailsInProgress.jsx container', () => {
  const mockTest = jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

  it('should render', () => {
    beforeEach(cleanup);
    // await act(async () => {
    renderWithRouter(
      <FoodDetailsInProgress />,
    );
    // });
  });

  it('should render', () => {
    beforeEach(cleanup);
    // await act(async () => {
    renderWithRouter(
      <FoodDetailsInProgress />,
    );
    // });
    expect(mockTest).toBeCalled();
    expect(mockTest).toBeCalledTimes(2);
  });
});
