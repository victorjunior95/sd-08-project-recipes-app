import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfileButton from './ProfileButton';
import PageTitle from './PageTitle';
import '../styles/header.css';
import SearchHeader from './SearchHeader';

function Header({ label, Search }) {
  const [searchInput, setSearchInput] = useState(false);

  const handleClick = () => {
    console.log(searchInput);
    setSearchInput(!searchInput);
  };

  return (
    <>
      <header className="header">
        <ProfileButton />
        <PageTitle text={ label } />
        <Search callback={ handleClick } />
      </header>
      <section>
        { searchInput ? <SearchHeader /> : '' }
      </section>
    </>
  );
}

Header.propTypes = {
  label: PropTypes.string.isRequired,
  Search: PropTypes.func.isRequired,
};

export default Header;
