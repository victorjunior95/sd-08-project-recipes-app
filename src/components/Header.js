import React from 'react';
import { Navbar, NavLink } from 'react-bootstrap';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <Navbar className="d-flex bg-warning justify-content-between align-items-center">
      <NavLink
        href="/perfil"
        data-testids="profile-top-btn"
        className="btn btn-warning border-0"
      >
        <img src={ profileIcon } className="img-fluid" alt="Profile Icon" />
      </NavLink>
      <span data-testids="page-title">pageTitle</span>
      <NavLink
        href="/explorar"
        data-testids="profile-top-btn"
        className="btn btn-warning border-0"
      >
        <img src={ searchIcon } className="img-fluid" alt="Search Icon" />
      </NavLink>
    </Navbar>
  );
}

export default Header;
