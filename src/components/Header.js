import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SeachBar';

const Header = () => {
  const [hiddenInput, setHidden] = useState(true);
  const history = useHistory();

  const redirectPages = (path) => {
    history.push(path);
  };

  return (

    <div>
      <SearchBar />
      <button
        type="button"
        data-test-id="profile-top-btn"
        onClick={ () => redirectPages('./perfil') }
      >
        <img src={ profileIcon } alt="profileIcon" />
      </button>

      <h2 data-test-id="page-title">Page Title</h2>
      <button
        type="button"
        data-testid="search-top-btn"
        onClick={ ({ target: { value } }) => setHidden(value) }
      >
        <img
          src={ searchIcon }
          alt="search icon"
        />
      </button>

    </div>

  );
};

export default Header;
