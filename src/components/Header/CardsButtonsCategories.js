import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';

const ARGUMENT_REQUEST_ALL = { search: '', searchRadio: 'name' };

class CardsButtonsCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameState: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { getRecipes, strCategory } = this.props;
    const { nameState } = this.state;
    if (nameState === strCategory) {
      getRecipes(ARGUMENT_REQUEST_ALL);
      this.setState({ nameState: '' });
    } else {
      const request = { search: strCategory, searchRadio: 'filterCategory' };
      getRecipes(request);
      this.setState({ nameState: strCategory });
    }
  }

  render() {
    const { strCategory } = this.props;
    return (
      <button
        data-testid={ `${strCategory}-category-filter` }
        type="button"
        onClick={ this.handleClick }
        name={ strCategory }
      >
        {strCategory}
      </button>
    );
  }
}

CardsButtonsCategories.propTypes = {
  strCategory: PropTypes.string.isRequired,
  getRecipes: PropTypes.func.isRequired,

};

export default (CardsButtonsCategories);
