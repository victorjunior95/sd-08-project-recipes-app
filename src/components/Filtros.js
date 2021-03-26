import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchIngredient as fetchIngredientAction } from '../action';

class Filtro extends Component {
  constructor() {
    super();
    this.state = {
      searchBy: 'Filter',
      valor: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { valor } = this.state;
    if (target.type === 'button') this.setState({ valor: target.value });
    console.log(valor);
  }

  submitSearch(searchIngredient) {
    const { params: { url: { byFilter } } } = this.props;
    const { valor } = this.state;
    const url = byFilter + valor;
    return searchIngredient(url);
  }

  render() {
    return (
      <nav>
        <button type="button">All</button>
        <button
          type="button"
          value="Beef"
          onClick={ this.handleChange }
        >
          Beef
        </button>
        <button
          type="button"
          value="Lamb"
          onClick={ this.handleChange }
        >
          Lamb
        </button>
        <button
          type="button"
          value="Chicken"
          onClick={ this.handleChange }
        >
          Chicken
        </button>
        <button
          type="button"
          value="Breakfast"
          onClick={ this.handleChange }
        >
          Breakfast
        </button>
        <button
          type="button"
          value="Dessert"
          onClick={ this.handleChange }
        >
          Dessert
        </button>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchIngredient: (url) => dispatch(fetchIngredientAction(url)),
});

export default connect(null, mapDispatchToProps)(Filtro);
