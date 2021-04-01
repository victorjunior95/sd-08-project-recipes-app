import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useRouteMatch } from 'react-router';
// import { fetchDrinksCategories } from '../../services/theCocTailDB';
import FilterButton from '../FilterButton';

// import { Container } from './styles';

function FilterButtonsSection() {
  const FIVE_BUTTONS = 5;
  const { categories } = useSelector((state) => state.foods);
  const [useCategories, setUseCategories] = useState([{}]);
  // const { path } = useRouteMatch();
  useEffect(() => {
    setUseCategories(categories);
  }, [categories]);
  return (
    <div>
      { useCategories.map(({ strCategory }, index) => (
        index < FIVE_BUTTONS && <FilterButton name={ strCategory } key={ index } />
      ))}
    </div>
  );
}

export default FilterButtonsSection;
