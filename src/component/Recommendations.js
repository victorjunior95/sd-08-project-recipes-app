import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { RecipeCards } from '.';
import Context from '../context/Context';

const SHOW_SIX_RECOMMENDATIONS = 6;

export default function Recommendations() {
  const { recipes, setSearchParams } = useContext(Context);
  const history = useHistory();
  const [recommendations, setRecommendations] = useState([]);
  const { pathname } = useLocation();

  const type = pathname.includes('comidas') ? 'Drink' : 'Meal';

  const location = history.location.pathname;
  const toggledLocation = location.includes('comidas')
    ? location.replace('comidas', 'bebidas')
    : location.replace('bebidas', 'comidas');

  useEffect(() => setSearchParams({ location: toggledLocation }),
    [setSearchParams, toggledLocation]);

  useEffect(() => {
    setRecommendations([...recipes].slice(0, SHOW_SIX_RECOMMENDATIONS));
  }, [recipes, setRecommendations]);

  return (
    <>
      <span>Recomendadas</span>
      {recommendations.map((recipe, index) => (
        <div data-testid={ `${index}-recomendation-card` } key={ index }>
          <RecipeCards
            recommendation
            key={ index }
            recipe={ recipe }
            id={ recipe[`id${type}`] }
            type={ type }
            index={ index }
          />
        </div>
      ))}
    </>
  );
}
