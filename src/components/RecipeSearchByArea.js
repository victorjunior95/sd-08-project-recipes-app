import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAreaThunk from '../redux/actions/fetchAreaAction';

function RecipeSearchByArea() {
  const [area, setArea] = useState('');
  const areas = useSelector((state) => state.search.areas);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => dispatch(fetchAreaThunk());
    fetchData();
  }, []);
  return (
    <select
      data-testid="explore-by-area-dropdown"
      value={ area }
      onChange={ (e) => setArea(e.target.value) }
    >
      {areas && areas.map((meal, i) => (
        <option
          key={ i }
          data-testid={ `${meal.strArea}-option` }
        >
          {meal.strArea}
        </option>))}
    </select>
  );
}

export default RecipeSearchByArea;
