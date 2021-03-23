import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

function HeaderWithSearch() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [searchBar, setSearchBar] = useState(false);
  const firstLetterUppercased = pathname[1].toUpperCase();
  const title = firstLetterUppercased + pathname.slice(2);

  return (
    <header>
      <div data-testid="header" className="header">
        <button type="button" onClick={ () => history.push('./perfil') }>
          <img
            src="../images/profileIcon.svg"
            data-testid="profile-top-btn"
            alt="profile page"
          />
        </button>
        <h1 data-testid="page-title">{title}</h1>
        <button type="button" onClick={ () => setSearchBar(!searchBar) }>
          <img
            src="../images/searchIcon.svg"
            data-testid="search-top-btn"
            alt="search button"
          />
        </button>
      </div>
      <div>
        {
          searchBar
            ? <SearchBar />
            : ''
        }
      </div>
    </header>
  );
}

export default HeaderWithSearch;
