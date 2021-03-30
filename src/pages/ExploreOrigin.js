import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, fetchAreas } from '../actions/recipes';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import RecipeCard from '../components/RecipeCard';

// const areas = [
//   { strArea: 'American' },
//   { strArea: 'British' },
//   { strArea: 'Canadian' },
//   { strArea: 'Chinese' },
//   { strArea: 'Dutch' },
//   { strArea: 'Egyptian' },
//   { strArea: 'French' },
//   { strArea: 'Greek' },
//   { strArea: 'Indian' },
//   { strArea: 'Irish' },
//   { strArea: 'Italian' },
//   { strArea: 'Jamaican' },
//   { strArea: 'Japanese' },
//   { strArea: 'Kenyan' },
//   { strArea: 'Malaysian' },
//   { strArea: 'Mexican' },
//   { strArea: 'Moroccan' },
//   { strArea: 'Russian' },
//   { strArea: 'Spanish' },
//   { strArea: 'Thai' },
//   { strArea: 'Tunisian' },
//   { strArea: 'Turkish' },
//   { strArea: 'Unknown' },
//   { strArea: 'Vietnamese' },
// ];

function ExploreOrigin() {
  const { list = [], isFetching, areas } = useSelector((state) => state.recipes);
  const { mealsToken } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [selectArea, setSelectArea] = useState('');

  useEffect(() => {
    dispatch(fetchAreas(mealsToken));
    dispatch(fetchRecipes(mealsToken, 'comidas'));
  }, []);

  const handleChange = ({ target }) => {
    setSelectArea(target.value);
    const reqType = { request: 'filter', key: 'a', parameter: target.value };
    dispatch(fetchRecipes(mealsToken, 'comidas', reqType));
  };
  if (isFetching || list.lenght === 0) return <Loading />;
  return (
    <>
      <Header />
      <h1>Explorar</h1>
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ handleChange }
        value={ selectArea }
      >
        { areas && [{ strArea: 'All' }, ...areas.meals].map(({ strArea }) => (
          <option
            data-testid={ `${strArea}-option` }
            key={ strArea }
            value={ strArea }
          >
            { strArea }
          </option>
        )) }
      </select>
      { list && list.map((recipe, index) => (
        <RecipeCard
          type="comidas"
          index={ index }
          recipe={ recipe }
          key={ `recipe-${index}` }
        />))}
      <Footer />
    </>
  );
}

export default ExploreOrigin;
