/* import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ProgressRecipesFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodProgressID: [],
    };
  }

  render() {
    console.log(this.props);
    return (<div>Eu sou página de ProgressRecipesFood</div>);
  }
}

// Drinks.propTypes = {

// };

export default ProgressRecipesFood;
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import favIconEnabled from '../../images/blackHeartIcon.svg';
// import favIconDisabled from '../../images/whiteHeartIcon.svg';
import filterFood from '../../utils/filterDetailsRecipes';
import { fetchFoodDetails } from '../../services';

const INITIAL_STATE_RECIPE_FOOD = {
  idMeal: '',
  ingredients: [],
  measures: [],
  strArea: '',
  strCategory: '',
  strInstructions: '',
  strMeal: '',
  strMealThumb: '',
  strTags: '',
  strYoutube: '',
};

class ProgressRecipesFood extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE_RECIPE_FOOD;

    this.handleRequestFood = this.handleRequestFood.bind(this);
  }

  componentDidMount() {
    this.handleRequestFood();
  }

  handleRequestFood() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    fetchFoodDetails(id).then((response) => {
      const meal = filterFood(response, 'meals');
      this.setState((state) => ({
        ...state,
        ...meal,
      }));
    });
  }

  render() {
    const {
      idMeal,
      strMealThumb,
      strMeal,
      strCategory,
      strInstructions,

      ingredients,
      measures,
    } = this.state;

    return (
      <div className="recipe-details">
        <img
          style={ { width: '50%' } }
          src={ strMealThumb }
          alt="Meal Thumbnail"
          data-testid="recipe-photo"
          className="recipe-photo"
        />
        <div className="recipe-header box-content">
          <h1 data-testid="recipe-title" className="recipe-title">
            {strMeal}
          </h1>
          <div className="actions">
            <button
              type="button"
              data-testid="share-btn"
              className="action-button"
            >
              <img src={ shareIcon } alt="share" />
            </button>
            <p id="link" style={ { display: 'none' } }>
              Link copiado!
            </p>
            <button type="button" className="action-button">
              <img
                src={ favIconEnabled }
                alt="favorite"
                data-testid="favorite-btn"
                className="favorite-icon"
              />
            </button>
          </div>
        </div>
        <span data-testid="recipe-category" className="recipe-category">
          {strCategory}
        </span>
        <div className="box-content">
          <h2>Ingredients</h2>
          <div>
            {ingredients.map((ingredient, index) => (
              <label
                key={ ingredient }
                htmlFor={ `${ingredient}-id` }
                data-testid={ `${index}-ingredient-step` }
              >
                <input
                  id={ `${ingredient}-id` }
                  type="checkbox"

                />
                {`${ingredient} - ${measures[index]}`}
              </label>
            ))}
          </div>
        </div>
        <div className="box-content">
          <h2>Instructions</h2>
          <p data-testid="instructions">{strInstructions}</p>
        </div>

        <div className="start-btn">
          <Link
            data-testid="finish-recipe-btn"
            className="start-recipe-btn"
            exact
            to={ `/comidas/${idMeal}/in-progress` }

          >
            Finalizar receita
          </Link>
        </div>
      </div>
    );
  }
}

ProgressRecipesFood.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProgressRecipesFood;
