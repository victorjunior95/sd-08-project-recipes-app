import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, fetchAreas } from '../actions/recipes';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import RecipeCard from '../components/RecipeCard';

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
