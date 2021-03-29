import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="not-found-body">
      <div className="message">
        <h1>404</h1>
        <p>a página que você procura não foi encontrada</p>
        <Link to="/">voltar</Link>
      </div>
    </div>
  );
}

export default NotFound;
