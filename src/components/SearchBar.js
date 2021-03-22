import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <label htmlFor="search">
          <input
            name="search"
            type="search"
            data-testid="search-input"
            value={ search }
          />
        </label>
        <div>
          <label htmlFor="search-radio">
            <input
              name="search-radio"
              type="radio"
              data-testid="ingredient-search-radio"
            />
            Ingredientes
          </label>
          <label htmlFor="search-radio">
            <input
              name="search-radio"
              type="radio"
              data-testid="name-search-radio"
            />
            Nome
          </label>
          <label htmlFor="search-radio">
            <input
              name="search-radio"
              type="radio"
              data-testid="first-letter-search-radio"
            />
            Primeira Letra
          </label>
        </div>
        <button type="button" data-testid="exec-search-btn">
          Buscar
        </button>
      </div>
    );
  }
}

export default SearchBar;
