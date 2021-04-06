import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithReduxandRouter from '../renderWithReduxandRouter';
import ButtonSearch from '../components/ButtonSearch';

describe('ButtonSearch.js', () => {
  test('if the Button state toggle when clicked', () => {
    renderWithReduxandRouter(<ButtonSearch type="search" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    userEvent.click(button);
    expect(searchInput).not.toBeInTheDocument();
  });

  test('if the Button set to SearchArea', () => {
    renderWithReduxandRouter(<ButtonSearch type="origem" />);

    const searchDropDown = screen.getByTestId('explore-by-area-dropdown');
    expect(searchDropDown).toBeInTheDocument();
  });
});
