import React from 'react';
import userEvent from '@testing-library/user-event';
import Perfil from '../Pages/Perfil';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import mockFetch from '../../cypress/mocks/fetch';

describe('Tests profile page', () => {
  it('A tela de perfil tem os seguintes atributos descritos', async () => {
    const {
      history,
      getByText,
      getByLabelText,
      getByRole,
      getByTestId,
    } = renderWithRouterAndRedux(<Perfil />);
    localStorage.setItem('user', '{ "email": "email@mail.com" }');
    console.log(history.location.pathname);
    
  });
});
