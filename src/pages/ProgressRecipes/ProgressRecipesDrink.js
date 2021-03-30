/* import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ProgressRecipesDrink extends Component {
  render() {
    return <div>Eu sou página de ProgressRecipesDrink</div>;
  }
}

// Drinks.propTypes = {

// };

export default ProgressRecipesDrink; */
/* import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ProgressRecipesDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodProgressID: [],
    };
  }

  render() {
    console.log(this.props);
    return (<div>Eu sou página de ProgressRecipesDrink</div>);
  }
}

// Drinks.propTypes = {

// };

export default ProgressRecipesDrink;
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import favIconEnabled from '../../images/blackHeartIcon.svg';

import filterFood from '../../utils/filterDetailsRecipes';

import { fetchDrinkDetails, getArrayIngredients } from '../../services';
import { fetchDrinksLocalStorage } from '../../store/actions';

const INITIAL_STATE_RECIPE_DRINK = {
  idDrink: '',
  ingredients: [],
  measures: [],
  strArea: '',
  strCategory: '',
  strInstructions: '',
  strDrink: '',
  strDrinkThumb: '',
  strTags: '',
  strYoutube: '',
  cocktails: [],

};

class ProgressRecipesDrink extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE_RECIPE_DRINK;

    this.handleRequestDrink = this.handleRequestDrink.bind(this);
    this.handleIndredients = this.handleIndredients.bind(this);

    this.handleLocalStorage = this.handleLocalStorage.bind(this);
  }

  componentDidMount() {
    this.handleRequestDrink();
    const { localStorageLoad } = this.props;
    localStorageLoad();
  }

  componentDidUpdate() {
    const { inProgress } = this.props;
  }

  handleLocalStorage() {
    const { cocktails: currentCocktails, idDrink } = this.state;
    getArrayIngredients(idDrink, currentCocktails);

    const { localStorageLoad } = this.props;
    localStorageLoad();
  }

  handleIndredients(target, newValue) {
    const { cocktails } = this.state;

    if (target.checked) {
      this.setState((state) => ({ ...state, cocktails: [...state.cocktails, newValue] }),
        this.handleLocalStorage);
    } else {
      const filterCocktails = cocktails.filter((ingredient) => ingredient !== newValue);
      this.setState((state) => ({ ...state, cocktails: [...filterCocktails] }),
        this.handleLocalStorage);
    }
  }

  handleRequestDrink() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    fetchDrinkDetails(id).then((response) => {
      const drink = filterFood(response, 'drinks');
      this.setState((state) => ({
        ...state,
        ...drink,
      }));
    });
  }

  render() {
    const {
      idDrink,
      strDrinkThumb,
      strDrink,
      strCategory,
      strInstructions,

      ingredients,
      measures,
    } = this.state;
    const { inProgress } = this.props;
    const verifyCheckBox = inProgress.cocktails[idDrink];
    console.log(verifyCheckBox);

    return (
      <div className="recipe-details">
        <img
          style={ { width: '50%' } }
          src={ strDrinkThumb }
          alt="Drink Thumbnail"
          data-testid="recipe-photo"
          className="recipe-photo"
        />
        <div className="recipe-header box-content">
          <h1 data-testid="recipe-title" className="recipe-title">
            {strDrink}
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
                  onChange={ ({ target }) => this.handleIndredients(target, ingredient) }
                  id={ `${ingredient}-id` }
                  type="checkbox"
                  checked={ verifyCheckBox && verifyCheckBox.includes(ingredient) }
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
            to={ `/comidas/${idDrink}/in-progress` }

          >
            Finalizar receita
          </Link>
        </div>
      </div>
    );
  }
}

ProgressRecipesDrink.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
ProgressRecipesDrink.defaultProps = {
  inProgress: {},
};

const mapStateToProps = ({ drinksReducer: { inProgress } }) => ({
  inProgress,
});

const mapDispatchToProps = (dispatch) => ({
  localStorageLoad: () => dispatch(fetchDrinksLocalStorage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressRecipesDrink);
