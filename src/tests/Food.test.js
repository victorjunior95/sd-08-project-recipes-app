import React from 'react';
// import { fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import renderWithRouter from './utils/renderWithRouter';
import Food from '../pages/Food';

const ALL_CATEGORY_FILTER = 'All-category-filter';
const PAGE_TITLE = 'page-title';
// const LOGIN_SUBMIT_BTN = 'login-submit-btn';

describe('Testes dos elemntos da tela de comidas', () => {
  it('existe um botão com todas as categorias', () => {
    const history = createMemoryHistory();
    const path = '/comidas';
    history.push(path);
    const { getByTestId } = renderWithRouter(<Food />, history);

    expect(getByTestId(ALL_CATEGORY_FILTER)).toBeInTheDocument();
    expect(getByTestId(PAGE_TITLE)).toBeInTheDocument();
  });
});
