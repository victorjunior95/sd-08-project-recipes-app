import React from 'react';
import fetchReceitas from '../services/RequisicaoApi';

function Login() {
  console.log(fetchReceitas('i'));
  return (
    <p>Login</p>
  );
}

export default Login;
