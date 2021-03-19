import React, { useState } from 'react';
// Da um auto fix com o eslint, n to conseguindo aqui, Att. Anti-Marcela thank you
// Me ame menos por favor <3
// Vou tentar o.o, Valeeeeu
function Login() {
  const [info, setInfo] = useState();
  function verificaEmailESenha(email, password) {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const minCaracteres = 6;
    const result = emailRegex.test(email) && password >= minCaracteres;
    return !result;
  }

  function handleChange({ target: { name, value } }) {
    setInfo({ ...info, [name]: value });
  }

  return (

    <form>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ handleChange }
        />
        {' '}
        <input
          type="password"
          name="password"
          id="password"
          data-testid="password-input"
          placeholder="Password"
          onChange={ handleChange }

        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ verificaEmailESenha(info[email], info.passsword.length) }

        >
          Entrar
        </button>
      </div>
    </form>
  );
}
export default Login;
