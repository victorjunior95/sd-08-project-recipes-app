import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import RecipesListArea from '../../components/RecipesList';
import RecipeContext from '../../context/RecipeContext';
import Card from '../../components/Card';

function ExpComidasArea() {
  const { directRequestFood, setFilterByArea, meals, filterByArea } = useContext(RecipeContext);
  const [areas, setAreas] = useState([]);
  const MAX_ITEMS = 12;

  const fetchListArea = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response) => response.json())
      .then((data) => setAreas(data.meals));
  };

  useEffect(() => {
    directRequestFood();
    fetchListArea();

    return setFilterByArea('All');
  }, []);

  const render = () => {
    let result;
    if (filterByArea !== 'All') {
      result = meals.filter((elem) => elem.strArea === filterByArea);
    } else {
      result = meals;
    }
    return result.map((elem, index) => {
      if (index < MAX_ITEMS) {
        return <Card key={ index } card={ elem } index={ index } />;
      }
      return '';
    });
  };

  return (
    <div className="comidas-body">
      <Header title="Exp. Origem" />
      <select
        value={ filterByArea }
        data-testid="explore-by-area-dropdown"
        className="dropdown-areas"
        onChange={ ({ target }) => setFilterByArea(target.value) }
      >
        {areas.map(({ strArea }, i) => (
          <option key={ i } data-testid={ `${strArea}-option` }>{strArea}</option>
        ))}
      </select>
      {render()}
      <Footer />
    </div>
  );
}

export default ExpComidasArea;
