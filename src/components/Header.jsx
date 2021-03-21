import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
      >
        Profile
      </button>
      <h1
        data-testid="page-title"
      >
        Receitas
      </h1>
      <Link to="/profile">
        <button
          type="button"
          data-testid="search-top-btn"
          data="./images/searchIcon.svg"
        >
          Search
        </button>
      </Link>
    </header>
    // - Tem os data-testids `profile-top-btn`, `page-title` e `search-top-btn`
  );
}
