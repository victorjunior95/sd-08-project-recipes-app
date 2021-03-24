import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMealCatsThunk from '../redux/actions/fetchMealCatsAction';

function MealCatsButtons() {
  const categories = useSelector((state) => state.recipes.categories);
  const { meals } = categories;
  const FIVE = 5;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => dispatch(fetchMealCatsThunk());
    fetchData();
  }, [dispatch]);

  return (
    <div>
      { meals && meals.map((elem, index) => (
        index < FIVE ? (
          <button
            type="button"
            key={ elem.strCategory }
            data-testid={ `${elem.strCategory}-category-filter` }
          >
            { elem.strCategory }
          </button>
        ) : ''
      ))}
    </div>
  );
}

export default MealCatsButtons;
