import React from 'react';
import { cleanup, screen, waitForElementToBeRemoved } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import mockFetch from '../../cypress/mocks/fetch';

import renderWithRouter from './helpers/renderWithRouter';
import FoodDetails from '../containers/FoodDetails';

describe('FoodDetails.jsx container', () => {
  const mockTest = jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
  // const history = createMemoryHistory();
  it('should render', async () => {
    // await act(async () => {
    const { history } = renderWithRouter(<FoodDetails />, '/comidas/52771');
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    // });
    expect(mockTest).toBeCalled();
    expect(mockTest).toBeCalledTimes(2);
    const shareButton = screen.getByTestId('share-btn');
    expect(shareButton).toBeInTheDocument();
    console.log(history.location.pathname);
  });
});
