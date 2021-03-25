import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

function HeaderWithoutSearch() {
  const history = useHistory();
  const { pathname } = useLocation();
  const firstLetterUppercased = pathname[1].toUpperCase();
  const title = firstLetterUppercased + pathname.slice(2);

  return (
    <header>
      <div data-testid="header" className="header">
        <button type="button" onClick={ () => history.push('/perfil') }>
          <img
            src={ profileIcon }
            data-testid="profile-top-btn"
            alt="profile page"
          />
        </button>
        <h1 data-testid="page-title">{title}</h1>
      </div>
    </header>
  );
}

export default HeaderWithoutSearch;
