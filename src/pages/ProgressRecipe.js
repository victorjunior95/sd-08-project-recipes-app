import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as InProgressRecipesActions } from '../store/ducks/inProgressRecipes';

import styles from '../styles/pages/ProgressRecipe.module.css';

import PrimaryButton from '../components/PrimaryButton';

const ProgressRecipe = ({ meals, cocktails }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const result = meals[id] || cocktails[id] || {};
    setRecipe(result);
  }, []);

  return (
    <div>
      <img
        src={ recipe.strMealThumb || recipe.strDrinkThumb }
        alt={ recipe.strMeal || recipe.strDrink }
        className={ styles.photo }
        data-testid="recipe-photo"
      />

      <PrimaryButton
        data-testid="finish-recipe-btn"
        // onClick={ () => handleButtonClick() }
      >
        Finalizar Receita
      </PrimaryButton>
    </div>
  );
};

ProgressRecipe.propTypes = {
  meals: PropTypes.objectOf(PropTypes.object).isRequired,
  cocktails: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ inProgressRecipes }) => ({
  meals: inProgressRecipes.meals,
  cocktails: inProgressRecipes.cocktails,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(InProgressRecipesActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ProgressRecipe);
