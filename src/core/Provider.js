import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipiesContext from './RecipiesContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState('');
  // const [food, setfood] = useState(initialState);

  const context = {
    data,
    setData: (result) => setData(result),
    user,
    setUser: (email) => setUser(email),
  };

  return (
    <RecipiesContext.Provider value={ context }>
      {children}
    </RecipiesContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
