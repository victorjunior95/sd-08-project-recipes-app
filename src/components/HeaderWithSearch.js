import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function HeaderWithSearch() {
  const history = useHistory();
  const location = useLocation();

  return (
    <div data-testid="header" className="header">
      <button type="button" onClick={ () => history.push('/perfil') }>
        <img
          src="../images/profileIcon.svg"
          data-testid="profile-top-btn"
          alt="profile page"
        />
      </button>
      <h1 data-testid="page-title">{location.pathname.slice(1)}</h1>
      <button type="button" onClick={ () => console.log('search') }>
        <img
          src="../images/searchIcon.svg"
          data-testid="search-top-btn"
          alt="search button"
        />
      </button>
    </div>
  );
}

export default HeaderWithSearch;
