import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearRecipesAction } from '../redux/actions/clearRecipesAction';
import clearSearchAction from '../redux/actions/clearSearchAction';
import fetchDrinkCatsThunk from '../redux/actions/fetchDrinkCatsAction';
import filterDrinkCatsAction from '../redux/actions/filterDrinkCatAction';

function DrinkCatsButtons() {
  const { drinks } = useSelector((state) => state.recipes.categories);
  const FIVE = 5;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => dispatch(fetchDrinkCatsThunk());
    fetchData();
  }, []);

  return (
    <div>
      { drinks && drinks.map((elem, index) => (
        index < FIVE ? (
          <button
            type="button"
            key={ elem.strCategory }
            value={ elem.strCategory }
            onClick={ (event) => dispatch(filterDrinkCatsAction(event.target.value)) }
            data-testid={ `${elem.strCategory}-category-filter` }
          >
            { elem.strCategory }
          </button>
        ) : ''
      ))}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => {
          dispatch(clearRecipesAction());
          dispatch(clearSearchAction());
        } }
      >
        All
      </button>
    </div>
  );
}

export default DrinkCatsButtons;
