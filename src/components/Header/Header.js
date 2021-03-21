import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import './header.css';
import SearchBar from '../SearchBar/search';

const Header = ({ title, visible }) => {
  const [input, setInput] = useState(false);
  const history = useHistory();
  function redirect() {
    history.push('/perfil');
  }

  return (
    <div className="container">
      <div className="header">
        <img
          src={ profileIcon }
          alt="Profile icon"
          data-testid="profile-top-btn"
          onClick={ () => redirect() }
        />
        <span data-testid="page-title">{title}</span>
        {visible && (
          <img
            src={ searchIcon }
            alt="Search icon"
            data-testid="search-top-btn"
            onClick={ () => (input === false ? setInput(true) : setInput(false)) }
          />
        )}
      </div>
      {input && <SearchBar />}
    </div>
  );
};
Header.defaultProps = {
  visible: true,
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
};

export default Header;
