import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { filterFirstLetter, filterIngredient, filterName } from '../services/api';

export const FoodCtx = createContext();

function ContextFood(props) {
  const { children } = props;
  const [foodApi, setFoodApi] = useState([]);
  const [filter, setFilter] = useState({ key: 'name', value: 'be' });
  const [currentPage, setCurrentPage] = useState('');
  const { key, value } = filter;

  useEffect(() => {
    const conect = async () => {
      if (key === 'ing') {
        const i = await filterIngredient(value);
        return setFoodApi(i);
      }

      if (key === 'name') {
        const n = await filterName(value);
        return setFoodApi(n);
      }

      if (key === 'first') {
        if (value.length > 1) {
          // eslint-disable-next-line no-alert
          alert('Sua busca deve conter somente 1 (um) caracter');
          return;
        }
        const f = await filterFirstLetter(value);
        console.log(value);
        return setFoodApi(f);
      }
    };
    conect();
  }, [key, value]);
  return (
    <FoodCtx.Provider value={ { foodApi, setFoodApi, filter, setFilter, setCurrentPage } }>
      {children}
    </FoodCtx.Provider>
  );
}

ContextFood.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContextFood;
