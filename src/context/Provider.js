import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LariContext from './Context';
import { headerSearch } from '../services';

const Provider = ({ children }) => {
  const [food, setFood] = useState([]);
  const handleHeaderSearch = async (search, type, typeAPI) => {
    const results = await headerSearch(search, type, typeAPI);
    console.log(results);
    // results.meals.length === 1
    //  ? (`/${typeAPI}/${idMeal}`)
    //  : setFood(results ? results.meals : []);
    setFood(results ? results.meals : []);
  };
  const context = { handleHeaderSearch, food };
  return (
    <div>
      <LariContext.Provider value={ context }>
        {children}
      </LariContext.Provider>
    </div>
  );
};
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
