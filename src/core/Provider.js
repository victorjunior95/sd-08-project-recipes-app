import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState('');

  // estado responsável por guardar a lista de comidas da pagina inicial
  const [mealData, setMealData] = useState([]);
  // const [food, setfood] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const context = {
    data,
    setData: (result) => setData(result),
    user,
    setUser: (email) => setUser(email),
    mealData,
    setMealData,
    isLoading,
    setIsLoading,
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
