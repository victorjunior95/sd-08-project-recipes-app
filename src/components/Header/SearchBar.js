import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFood } from '../../store/actions/foodsActions';
import { alertSearch } from '../../serviceWorker';
import '../../styles/components/Header/SearchBar.css';

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
    const searchLength = 1;
    const { search, searchRadio } = this.state;
    const { getFood } = this.props;
    if (searchRadio === 'firstLetter') {
      if (search.length === searchLength) {
        return getFood({ search, searchRadio });
      }
      alertSearch();
    }
    getFood({
      search,
      searchRadio,
    });
  }

  render() {
    const { search, searchRadio } = this.state;
    return (
      <div className="searchBarContainer">
        <div>
          <input
            name="search"
            type="search"
            data-testid="search-input"
            value={ search }
            onChange={ this.handleChange }
          />
        </div>
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

const mapDispatchToProps = (dispatch) => ({
  getFood: (value) => dispatch(fetchFood(value)),
});

SearchBar.propTypes = {
  getFood: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(SearchBar);
