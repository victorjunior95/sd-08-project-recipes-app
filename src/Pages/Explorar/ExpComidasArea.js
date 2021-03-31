import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecipesList from '../../components/RecipesList';
import RecipeContext from '../../context/RecipeContext';

function ExpComidasArea() {
  const { directRequestFood } = useContext(RecipeContext);
  const [areas, setAreas] = useState([]);

  const fetchListArea = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response) => response.json())
      .then((data) => setAreas(data.meals));
  };

  useEffect(() => {
    directRequestFood();
    fetchListArea();
  }, []);

  return (
    <div className="comidas-body">
      <Header title="Exp. Origem" />
      <select
        data-testid="explore-by-area-dropdown"
        className="dropdown-areas"
      >
        {areas.map(({ strArea }, i) => (
          <option key={ i } data-testid={ `${strArea}-option` }>{strArea}</option>
        ))}
      </select>
      <RecipesList />
      <Footer />
    </div>
  );
}

export default ExpComidasArea;
