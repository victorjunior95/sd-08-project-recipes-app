import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import FilterButton from '../FilterButton';

function FilterButtonsSection() {
  const FIVE_BUTTONS = 5;
  const { categories: foods } = useSelector((state) => state.foods);
  const { categories: drinks } = useSelector((state) => state.drinks);
  const [useCategories, setUseCategories] = useState([{}]);
  const { path } = useRouteMatch();

  useEffect(() => {
    if (path === '/comidas') {
      setUseCategories(foods);
    }
  }, [foods]);

  useEffect(() => {
    if (path === '/bebidas') {
      setUseCategories(drinks);
    }
  }, [drinks]);

  return (
    <div>
      { useCategories.map(({ strCategory }, index) => (
        index < FIVE_BUTTONS && <FilterButton name={ strCategory } key={ index } />
      ))}
    </div>
  );
}

export default FilterButtonsSection;
