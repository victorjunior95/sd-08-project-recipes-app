// import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
// import { unmountComponentAtNode } from 'react-dom';
// import userEvent from '@testing-library/user-event';
// import { fireEvent, waitFor } from '@testing-library/dom';
// import renderWithRouter from '../configs/renderWithRouter';
// import { login } from '../constants/index';
// import mealsApi from '../services/mealsAPI';
// import mockedCategoriesResult from './mocks/mealsResponse';
// import App from '../App';

// let container = null;
// beforeEach(() => {
//   // DOM as render target
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // Clear
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// jest.mock('../services/mealsAPI');
// mealsApi.mockImplementation(() => Promise.resolve(mockedCategoriesResult));

// describe('Fetch mealsAPI on load', () => {
//   it('should fetch mealsAPI test end point and get array with length 2.', async () => {
//     const { getByTestId, history } = renderWithRouter(<App />);
//     await waitFor(() => expect(mealsApi).toHaveBeenCalled());
//     expect(screen.getAllByTestId('category').length).toEqual(
//       mockedCategoriesResult.length,
//     );
//   });
// });
