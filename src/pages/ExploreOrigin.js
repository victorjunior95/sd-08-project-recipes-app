import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { clearRecipesAction } from '../redux/actions/clearRecipesAction';
import fetchMealThunk from '../redux/actions/fetchMealAction';

function ExploreOrigin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipes);
  const { areaChoosen } = useSelector((state) => state.search);
  const type = areaChoosen !== '' ? 'area' : '';
  useEffect(() => {
    const fetchData = (inputf, typef) => dispatch(fetchMealThunk(inputf, typef));
    fetchData(areaChoosen, type);
  }, [areaChoosen, type]);

  useEffect(() => () => {
    dispatch(clearRecipesAction());
  }, []);

  return (
    <main>
      <Header />
      <section className="cards">
        { recipes && recipes.map((elem, index) => (
          <button
            key={ elem.idMeal }
            type="button"
            onClick={ () => history.push(`/comidas/${elem.idMeal}`) }
            data-testid={ `${index}-recipe-card` }
          >
            <div>
              <h4 data-testid={ `${index}-card-name` }>{ elem.strMeal }</h4>
              <span>{ elem.idMeal }</span>
              <img
                className="card"
                src={ elem.strMealThumb }
                alt={ elem.strMeal }
                data-testid={ `${index}-card-img` }
              />
            </div>
          </button>
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default ExploreOrigin;
