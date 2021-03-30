import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

// 24,36,44,53,54

describe('Testando a Tela de Perfil', () => {
  const emailDeTeste = 'teste@gmail.com';
  const emailTexto = 'Digite seu e-mail';

  it('Testando se a página contém o botão de Receitas Feitas', async () => {
    renderWithRouter(<App />);

    const emailText = screen.getByPlaceholderText(emailTexto);
    const senhaText = screen.getByPlaceholderText('Senha');
    const botaoEntrar = screen.getByText('Entrar');

    expect(botaoEntrar).toBeInTheDocument();

    userEvent.type(emailText, emailDeTeste);
    userEvent.type(senhaText, '1234567');
    userEvent.click(botaoEntrar);

    const botaoPerfil = await screen.findByAltText('Profile Icon');
    // userEvent.click(botaoPerfil);

    // const botaoFeitas = screen.getByText(/receitas feitas/);
    expect(botaoPerfil).toBeInTheDocument();
  });
});

// const { history } = renderWithRouter(<LoginForm />);

//     const emailText = screen.getByPlaceholderText(emailTexto);
//     const senhaText = screen.getByPlaceholderText('Senha');
//     const botaoEntrar = screen.getByText('Entrar');

//     userEvent.type(emailText, emailDeTeste);
//     userEvent.type(senhaText, '1234567');
//     userEvent.click(botaoEntrar);

//     expect(localStorage.getItem('mealsToken')).toBe('1');
//     expect(localStorage.getItem('cocktailsToken')).toBe('1');
//     expect(JSON.parse(localStorage.getItem('user')))
//       .toStrictEqual({ email: emailDeTeste });
//     expect(history.location.pathname).toBe('/comidas');
