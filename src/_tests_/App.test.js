import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';

describe('Teste tela de login', () => {
  it('renderiza a pagina inicial', () => {
    renderWithRouterAndRedux(<App />);
  });
});
