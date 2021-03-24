import React from 'react';

function RecipeSearchByArea(meals) {
  const [area, setArea] = useState('');
  useEffect(() => {}, []);
  return (
    <select
      data-testid="explore-by-area-dropdown"
      value={ area }
      onChange={ setArea(e.target.value) }
    >
      {meals.map((meal, i) => (
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
