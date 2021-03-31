import React, { useContext, useEffect, useState } from 'react';
import { requestMealsCategoriesList } from '../services/apiRequests';
import Context from '../context/Context';

function MealsButtonsFilter() {
  const MIN_INDEX = 0;
  const MAX_INDEX = 5;
  const { setInputValue, setSearchParams } = useContext(Context);
  const [mealsCategoriesList, setMealsCategoriesList] = useState([]);

  useEffect(() => {
    const requestCategories = async () => {
      const categories = await requestMealsCategoriesList();
      setMealsCategoriesList(categories);
    };
    requestCategories();
  }, [setMealsCategoriesList]);

  if (!mealsCategoriesList) return <span>Loading...</span>;
  return (
    <main>
      <button
        type="button"
        key="all"
        data-testid="All-category-filter"
        onClick={ () => {
          setInputValue('all');
          setSearchParams('');
        } }
      >
        All
      </button>
      {
        mealsCategoriesList.slice(MIN_INDEX, MAX_INDEX)
          .map(({ strCategory }) => (
            <button
              type="button"
              key={ strCategory }
              data-testid={ `${strCategory}-category-filter` }
              onClick={ () => {
                setInputValue(strCategory);
                setSearchParams('categorie');
              } }
            >
              { strCategory }
            </button>
          ))
      }
    </main>
  );
}

export default MealsButtonsFilter;
