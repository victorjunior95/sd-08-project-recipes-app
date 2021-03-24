import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFood, fetchDrink } from '../../store/actions';
import { alertSearch } from '../../serviceWorker';

const SEARCH_LENGTH = 1;
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchRadio: 'name',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { search, searchRadio } = this.state;
    const { getFood, title, getDrink } = this.props;
    if (searchRadio === 'firstLetter' && search.length > SEARCH_LENGTH) {
      return alertSearch('14');
    }
    if (title === 'Comidas') {
      return getFood({ search, searchRadio });
    }
    return getDrink({ search, searchRadio });
  }

  render() {
    const { search, searchRadio } = this.state;
    return (
      <div>
        <label htmlFor="search">
          <input
            name="search"
            type="search"
            data-testid="search-input"
            value={ search }
            onChange={ this.handleChange }
          />
        </label>
        <div>
          <label htmlFor="searchRadio">
            <input
              value="ingredient"
              name="searchRadio"
              type="radio"
              data-testid="ingredient-search-radio"
              onChange={ this.handleChange }
              checked={ searchRadio === 'ingredient' }
            />
            Ingredientes
          </label>
          <label htmlFor="searchRadio">
            <input
              value="name"
              name="searchRadio"
              type="radio"
              data-testid="name-search-radio"
              onChange={ this.handleChange }
              checked={ searchRadio === 'name' }
            />
            Nome
          </label>
          <label htmlFor="searchRadio">
            <input
              value="firstLetter"
              name="searchRadio"
              type="radio"
              data-testid="first-letter-search-radio"
              onChange={ this.handleChange }
              checked={ searchRadio === 'firstLetter' }
            />
            Primeira Letra
          </label>
        </div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchBar.defaultProps = { listDrinks: [], listFoods: [] };

SearchBar.propTypes = {
  getFood: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  listFoods: state.foodsReducer.data.meals,
  listDrinks: state.foodsReducer.data.drinks,

});
const mapDispatchToProps = (dispatch) => ({
  getFood: (value) => dispatch(fetchFood(value)),
  getDrink: (value) => dispatch(fetchDrink(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
