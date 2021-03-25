import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import RecipeSearchBar from './RecipeSearchBar';
import RecipeSearchByArea from './RecipeSearchByArea';

function ButtonSearch({ type }) {
  const [search, setSearchBar] = useState(false);

  const handleClick = () => {
    if (!search) {
      setSearchBar(true);
    } else if (search) {
      setSearchBar(false);
    }
  };

  return (
    <>
      <button type="button" onClick={ handleClick }>
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="search-icon"
        />
      </button>
      { (type !== 'origem' && search) && <RecipeSearchBar /> }
      { (type === 'origem' && !search) && <RecipeSearchByArea /> }
    </>
  );
}

ButtonSearch.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ButtonSearch;
