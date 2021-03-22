import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

import { fetchCategories, fetchRecipes } from '../actions/recipes';

function SearchBar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const token = 1;
  const selectType = { '/comidas': 'meals', '/bebidas': 'drinks' };
  const type = selectType[pathname];

  useEffect(() => {
    dispatch(fetchCategories(token, type));
    dispatch(fetchRecipes(token, type));
  }, []);

  return (
    <div />
  );
}

export default SearchBar;
