import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import userEvent from '@testing-library/user-event';
import mockFetch from '../cypress/mocks/fetch'

describe('Tests Recipe Application', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
  });

  test('Tests login page', async () => {
    const { getByText, getByLabelText, getByRole, getByAltText } = render(<Provider store={ store }><App /></Provider>);

    expect(getByText(/trybe/i)).toBeInTheDocument();

    userEvent.type(getByLabelText(/email/i), 'user@email.com');
    userEvent.type(getByLabelText(/senha/i), '12345678');
    expect(getByRole('button', { name: /entrar/i })).not.toBeDisabled();
    userEvent.click(getByRole('button', { name: /entrar/i }));

    expect(getByText(/comidas/i)).toBeInTheDocument();
    expect(getByAltText(/perfil/i)).toBeInTheDocument();
    expect(getByAltText(/pesquisar/i)).toBeInTheDocument();
    expect(getByText(/carregando\.\.\./i)).toBeInTheDocument();
  });

  // test('Tests food page', async () => {
  //   const { getByText, getByLabelText, getByRole, getByAltText, getByTestId } = render(<Provider store={ store }><App /></Provider>);
  //   window.alert = jest.fn();

  //   await waitForElementToBeRemoved(() => getByText(/carregando\.\.\./i));
  //   const corba = getByText(/corba/i);
    
  //   userEvent.click(getByRole('button', { name: /beef/i }));
  //   await waitForElementToBeRemoved(() => getByText(/carregando\.\.\./i));
  //   const beefAndMustardPie = getByText(/beef and mustard pie/i);
  //   expect(corba).not.toBeInTheDocument();

  //   userEvent.click(getByRole('button', { name: 'Beef' }));
  //   await waitForElementToBeRemoved(() => getByText(/carregando\.\.\./i));
  //   expect(getByText(/corba/i)).toBeInTheDocument();
  //   expect(beefAndMustardPie).not.toBeInTheDocument();

  //   userEvent.click(getByRole('button', { name: 'All' }));
  //   await waitForElementToBeRemoved(() => getByText(/carregando\.\.\./i));
  //   expect(getByText(/corba/i)).toBeInTheDocument();
  //   expect(beefAndMustardPie).not.toBeInTheDocument();

  //   userEvent.click(getByAltText(/pesquisar/i));
  //   userEvent.type(getByLabelText(/pesquisar/i), 'corba');
  //   userEvent.click(getByRole('button', { name: 'Pesquisar' }));

  //   userEvent.click(getByLabelText(/nome/i));
  //   userEvent.type(getByLabelText(/pesquisar/i), 'corba');
  //   userEvent.click(getByRole('button', { name: 'Pesquisar' }));
  // });
});
