import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Profile from '../containers/Profile';
import App from '../App';

describe('Os elementos da página de perfil', () => {
  it('Mostra a tela de perfil quando a rota é `/perfil`', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/perfil');
    expect(history.location.pathname).toBe('/perfil');
  });
  it('existe um cabeçalho no componente', () => {
    const { getByTestId } = renderWithRouter(<Profile />);
    const headerContainer = getByTestId('header-container');
    expect(headerContainer).toBeInTheDocument();
  });
  it('existe um botão de perfil no cabeçalho', () => {
    const { getByTestId } = renderWithRouter(<Profile />);
    const profileButton = getByTestId('profile-top-btn');
    expect(profileButton).toBeInTheDocument();
  });
  it('existe um título no cabeçalho', () => {
    const { getByTestId, getByRole } = renderWithRouter(<Profile />);
    const pageTitle = getByTestId('page-title');
    const profilePage = getByRole('heading', { name: /perfil/i });
    expect(pageTitle).toBeInTheDocument();
    expect(profilePage).toBeInTheDocument();
  });
  it('existe um botão endereço de email do perfil', () => {
    const { getByTestId } = renderWithRouter(<Profile />);
    const emailProfile = getByTestId('profile-email');
    expect(emailProfile).toBeInTheDocument();
  });
  it('existe um botão Receitas Feitas, Receitas Favoritas e Sair', () => {
    const { getByTestId } = renderWithRouter(<Profile />);
    const buttonRecipesDone = getByTestId('profile-done-btn');
    const buttonFavoriteRecipes = getByTestId('profile-favorite-btn');
    const buttonLogout = getByTestId('profile-logout-btn');
    expect(buttonRecipesDone).toBeInTheDocument();
    expect(buttonFavoriteRecipes).toBeInTheDocument();
    expect(buttonLogout).toBeInTheDocument();
  });
  it('ao clicar no botão Receitas Feitas é direcionada para a página', () => {
    const { history, getByText } = renderWithRouter(<Profile />);
    userEvent.click(getByText(/receitas feitas/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/receitas-feitas');
  });
  it('ao clicar no botão Receitas Favoritas é direcionada para página', () => {
    const { history, getByText } = renderWithRouter(<Profile />);
    userEvent.click(getByText(/receitas favoritas/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/receitas-favoritas');
  });
  it('ao clicar no botão Sair é direcionada para página de Login', () => {
    const { history, getByText } = renderWithRouter(<Profile />);
    userEvent.click(getByText(/sair/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  it('existe um rodapé no componente', () => {
    const { getByTestId } = renderWithRouter(<Profile />);
    const footer = getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
  it('existe uma imagem de drink que leva para as receitas de drinks', () => {
    const { getByTestId } = renderWithRouter(<Profile />);
    const buttonDrinks = getByTestId('drinks-bottom-btn');
    expect(buttonDrinks).toBeInTheDocument();
  });
  it('existe uma imagem que leva para página de explorar receitas', () => {
    const { getByTestId } = renderWithRouter(<Profile />);
    const ButtonExplore = getByTestId('explore-bottom-btn');
    expect(ButtonExplore).toBeInTheDocument();
  });
  it('existe uma imagem que leva para página de comidas', () => {
    const { getByTestId } = renderWithRouter(<Profile />);
    const ButtonFood = getByTestId('food-bottom-btn');
    expect(ButtonFood).toBeInTheDocument();
  });
});
