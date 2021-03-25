import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchDrinkCatsThunk from '../redux/actions/fetchDrinkCatsAction';

function DrinkCatsButtons() {
  const categories = useSelector((state) => state.recipes.categories);
  const { drinks } = categories;
  const FIVE = 5;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => dispatch(fetchDrinkCatsThunk());
    fetchData();
  }, [dispatch]);

  return (
    <div>
      { drinks && drinks.map((elem, index) => (
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

export default DrinkCatsButtons;
