import React from 'react';
import PropTypes from 'prop-types';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <section className="header-bar">
        <input type="image" src={ profile } alt="profile" data-testid="profile-top-btn" />
        <h3 data-testid="page-title">{ title }</h3>
        <input type="image" src={ search } alt="search" data-testid="search-top-btn" />
      </section>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
