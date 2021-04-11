// import React from 'react';
// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { Router } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import ExplorarArea from '../pages/ExplorarArea';
// import mockFetch from '../mocks/fetch';

// describe.only('ExplorarArea', () => {
//   beforeEach(() => {
//     mockFetch();
//   });

//   test('78 - Implemente os elementos da tela de explorar por local de origem respeitando os atributos descritos no protótipo', async () => {
//     const history = createBrowserHistory();
//     const {findByTestId, findAllByTestId} = render(
//       <Router history={history}>
//         <ExplorarArea />
//       </Router>
//     );

//     const areasDropdown = await findByTestId('explore-by-area-dropdown');
//     expect(areasDropdown).toBeInTheDocument();
//     const areasOptions = await findAllByTestId('*-option');
//     console.log(areasOptions.length);

//   });
// })