import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState('');
  // const [food, setfood] = useState(initialState);

  const context = {
    data,
    setData: (result) => setData(result),
    user,
    setUser: (email) => setUser(email),
    // changeTitleByPathName,
  };

  return (
    <RecipesContext.Provider value={ context }>
      {children}
    </RecipesContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
