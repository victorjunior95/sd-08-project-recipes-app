import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRegionRecipe, getExploreMealsByRegion } from '../../store/actions';
import { Header, Footer, Loading } from '../../components';

import '../../styles/pages/Container.css';

const MAX_SIX_CARDS = 12;
const ExploreByAreas = ({
  isFetching,
  areas,
  recipes,
  areasFetcher,
  recipesByRegion,
}) => {
  const [areaSelector, setAreaSelector] = useState('All');

  useEffect(() => {
    areasFetcher();
  }, []);

  useEffect(() => {
    if (areaSelector) {
      recipesByRegion(areaSelector);
    }
  }, [areaSelector]);

  return (
    <div>
      <Header title="Explorar Origem" />
      <Loading state={ isFetching }>
        <div className="container">
          <select
            data-testid="explore-by-area-dropdown"
            onChange={ (event) => setAreaSelector(event.target.value) }
          >
            <option key="All" data-testid="All-option">
              All
            </option>
            {areas.map((area) => (
              <option key={ area.strArea } data-testid={ `${area.strArea}-option` }>
                {area.strArea}
              </option>
            ))}
          </select>
          {recipes.length
            ? recipes.slice(0, MAX_SIX_CARDS).map((recipe, index) => (
              <Link key={ recipe.idMeal } to={ `/comidas/${recipe.idMeal}` }>
                <div data-testid={ `${index}-recipe-card` }>
                  <img
                    src={ recipe.strMealThumb }
                    alt="foto receita"
                    data-testid={ `${index}-card-img` }
                  />
                  <span data-testid={ `${index}-card-name` }>
                    {recipe.strMeal}
                  </span>
                </div>
              </Link>
            ))
            : null}
        </div>
      </Loading>
      <Footer />
    </div>
  );
};

ExploreByAreas.propTypes = {
  areas: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  areasFetcher: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  recipes: PropTypes.shape({
    length: PropTypes.number.isRequired,
    slice: PropTypes.func.isRequired,
  }).isRequired,
  recipesByRegion: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: state.exploreRecipesByRegion.isFetching,
  areas: state.exploreRecipesByRegion.regions,
  recipes: state.exploreRecipesByRegion.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  areasFetcher: () => dispatch(getRegionRecipe()),
  recipesByRegion: (region) => dispatch(getExploreMealsByRegion(region)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreByAreas);
