import React from 'react';
import { cleanup, screen, wait, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
// import { unmountComponentAtNode } from 'react-dom';
// import mockFetch from '../../cypress/mocks/fetch';
import drinks from '../../cypress/mocks/drinks';
import renderWithRouter from './helpers/renderWithRouter';
import mockFetch from '../../cypress/mocks/fetch';
// import MainFood from '../containers/MainFood';
import Drinks from '../containers/Drinks';

describe('Drinks section', () => {
  beforeEach(cleanup);
  it('should renders Header', () => {
    // act(() => {
    renderWithRouter(
      <Drinks />,
      {
        route: '/bebidas',
      },
    );
    const header = screen.getByTestId('header-container');
    expect(header).toBeInTheDocument();
    // });
  });
});

describe('Fetch apis', () => {
  it('fetchh', async () => {
    // beforeAll(() => {
    //   jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    // });
    const mockTest = jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    // const apiResponse = Promise.resolve({
    //   json: () => Promise.resolve(drinks.drinks),
    //   ok: true,
    // });
    // const mockedExchange = jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);
    // afterEach(() => jest.clearAllMocks());
    await act(async () => {
      renderWithRouter(
        <Drinks />,
        {
          route: '/bebidas',
        },
      );
      // });
      await wait(() => {
        expect(mockTest).toBeCalled();
        expect(mockTest).toBeCalledTimes(2);
        const buttons = screen.getAllByRole('button');
        console.log(buttons.length);
        expect(buttons.length).toBe(5);
        // expect(buttons.length).toBeGreaterThanOrEqual(20);
      });
    });
    // });
  });
});
