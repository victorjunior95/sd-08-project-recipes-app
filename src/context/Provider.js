import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './MyContext';

function Provider({ children }) {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleExplore, setToggleExplore] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [createCards, setCreateCards] = useState(false);
  const [apiResponse, setApiResponse] = useState([]);
  const contextValue = {
    userEmail,
    setEmail,
    password,
    setPassword,
    toggleExplore,
    setToggleExplore,
    searchFilter,
    setSearchFilter,
    inputSearch,
    setInputSearch,
    createCards,
    setCreateCards,
    apiResponse,
    setApiResponse,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>);
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
};
