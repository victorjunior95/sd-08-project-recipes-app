import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SeachBar';

const Header = () => {
  const [showInput, setHidden] = useState(false);
  const history = useHistory();

  const redirectPages = (path) => {
    history.push(path);
  };

  return (

    <div>
      <SearchBar showInput={ showInput } />
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => redirectPages('./perfil') }
      >
        <img src={ profileIcon } alt="profileIcon" />
      </button>

      <h2 data-testid="page-title">Page Title</h2>
      <button
        type="button"
        data-testid="search-top-btn"
        onClick={ () => setHidden(!showInput) }
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
