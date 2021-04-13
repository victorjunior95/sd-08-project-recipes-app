import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
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
    // });
    const header = screen.getByTestId('header-container');
    expect(header).toBeInTheDocument();
  });
});

describe('Fetch apis', () => {
  it('fetchh', async () => {
    const mockTest = jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

    await act(async () => {
      renderWithRouter(
        <Drinks />,
        {
          route: '/bebidas',
        },
      );
    });
    expect(mockTest).toBeCalled();
    expect(mockTest).toBeCalledWith('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    expect(mockTest).toBeCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    expect(mockTest).toBeCalledTimes(2);
    const buttons = screen.getAllByRole('button');
    console.log(buttons.length);
    expect(buttons.length).toBe(10);

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });

    const mainCards = screen.getAllByTestId(/-recipe-card/i);
    expect(mainCards.length).toBe(12);

    mainCards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });
    const buttonAll = screen.getByText(/all/i);
    expect(buttonAll).toBeInTheDocument();
    act(() => {
      userEvent.click(buttonAll);
    });

    // const mainCards = screen.getAllByTestId(/-recipe-card/i);
    mainCards.forEach((card, index) => {
      // console.log(card.childElementCount);
      expect(card.childElementCount).toBe(2);
      // console.log(card.firstChild.src);
      expect(card.firstChild.src).toBe(drinks.drinks[index].strDrinkThumb);
      // console.log(card.lastChild.innerHTML);
      expect(card.lastChild.innerHTML.replace('amp;', ''))
        .toEqual(drinks.drinks[index].strDrink);
    });
  });
});

// describe('click on buttons', () => {
//   it('click button', async () => {
//     const mockTest = jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
//     await act(async () => {
//       renderWithRouter(
//         <Drinks />,
//         {
//           route: '/bebidas',
//         },
//       );
//     });

//     const buttonAll = screen.getByText(/all/i);
//     expect(buttonAll).toBeInTheDocument();

//     userEvent.click(buttonAll);
//     const mainCards = screen.getAllByTestId(/-recipe-card/i);
//     mainCards.forEach((card, index) => {
//       // console.log(card.childElementCount);
//       expect(card.childElementCount).toBe(2);
//       // console.log(card.firstChild.src);
//       expect(card.firstChild.src).toBe(drinks.drinks[index].strDrinkThumb);
//       // console.log(card.lastChild.innerHTML);
//       expect(card.lastChild.innerHTML.replace('amp;', ''))
//         .toEqual(drinks.drinks[index].strDrink);
//     });
//   });
// });
