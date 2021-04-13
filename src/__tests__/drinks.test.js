import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
// import { unmountComponentAtNode } from 'react-dom';
// import mockFetch from '../../cypress/mocks/fetch';
import drinks from '../../cypress/mocks/drinks';
import renderWithRouter from './helpers/renderWithRouter';
// import MainFood from '../containers/MainFood';
import Drinks from '../containers/Drinks';

describe('Drinks section', () => {
  // beforeEach(cleanup);
  it('should renders Header', async () => {
    await act(async () => {
      renderWithRouter(
        <Drinks />,
        {
          route: '/bebidas',
        },
      );
      const header = screen.getByTestId('header-container');
      expect(header).toBeInTheDocument();
    });
  });

  it('should fetch apis', async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve(drinks.drinks),
      ok: true,
    });

    const mockedExchange = jest.spyOn(global, 'fetch')
      .mockImplementation(() => apiResponse);

    afterEach(() => jest.clearAllMocks());
    await act(async () => {
      renderWithRouter(
        <Drinks />,
        {
          route: '/bebidas',
        },
      );
      const header = screen.getByTestId('header-container');
      expect(header).toBeInTheDocument();
      expect(mockedExchange).toBeCalled();
    });
  });
});
