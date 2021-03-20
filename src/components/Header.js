import React from 'react';

function Header() {
  return (
    <header className="d-flex bg-primary justify-content-between align-items-center">
      <button type="button" data-testids="profile-top-btn" className="btn btn-primary border-0">
        <i className="bi-person-fill" style={ {fontSize: "2rem"} } />
      </button>
      <span data-testids="page-title">pageTitle</span>
      <button type="button" data-testids="search-top-btn" className="btn btn-primary border-0">
        <i className="bi-search" style={ {fontSize: "2rem"} } />
      </button>
    </header>
  );
}

export default Header;
