import React, { useContext } from 'react';
import UserContext from '../../context/userContext/UserContext';

function Login() {
  const { values: { email }, functions: { handleEmail } } = useContext(UserContext);
  return (
    <div>
      <label htmlFor="email-input">
        Email:
        <input
          id="email-input"
          data-testid="email-input"
          type="email"
          value={ email }
          onChange={ handleEmail }
        />
      </label>
    </div>
  );
}

export default Login;
