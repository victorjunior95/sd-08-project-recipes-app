import React from 'react';
import { screen, cleanup, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import mockFetch from '../../cypress/mocks/fetch';

import renderWithRouter from './helpers/renderWithRouter';
import MainFood from '../containers/MainFood';

// const apiResponse = Promise.resolve({
//   json: () => Promise.resolve(mockData),
//   ok: true,
// });
// const mockedExchange = jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);
// afterEach(() => jest.clearAllMocks());

beforeAll(() => {
  jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
});

describe('MainFood section', () => {
  // beforeEach(cleanup);
  it('should renders Header', () => {
    act(() => {
      renderWithRouter(
        <MainFood />,
        {
          route: '/comidas',
        },
      );
      const header = screen.getByTestId('header-container');
      expect(header).toBeInTheDocument();
    });
  });
  it('should dropdown Search Menu', () => {
    act(() => {
      renderWithRouter(
        <MainFood />,
        {
          route: '/comidas',
        },
      );
      const header = screen.getByTestId('header-container');
      expect(header).toBeInTheDocument();
      const searchButton = screen.getByTestId('search-top-btn');
      expect(searchButton).toBeInTheDocument();
    });
  });
  // it('should renders Footer', () => {
  //   act(() => {
  //     renderWithRouter(
  //       <MainFood />,
  //       {
  //         route: '/comidas',
  //       },
  //     );
  //     const footer = screen.getByTestId('footer');
  //     expect(footer).toBeInTheDocument();
  //   });
  // });
});
