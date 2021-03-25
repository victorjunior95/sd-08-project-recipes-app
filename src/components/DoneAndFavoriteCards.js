import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import shareIcon from '../images/shareIcon.svg';

export default class DoneAndFavoriteCards extends Component {
  render() {
    const { recipes, filter, share } = this.props;
    return (
      <div>
        {recipes.filter((element) => filter === 'all' || element.type === filter)
          .map((obj, index) => (
            <div className="card" key={ obj.id }>
              <center>
                <div className="a">
                  <Link to={ `${obj.type}s/${obj.id}` }>
                    <img
                      data-testid={ `${index}-horizontal-image` }
                      alt="card"
                      src={ `${obj.image}` }
                      className="linkImage"
                    />
                  </Link>

                </div>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`${obj.alcoholicOrNot} ${obj.area} - ${obj.category}`}

                </p>
                <Link to={ `${obj.type}s/${obj.id}` }>
                  <p data-testid={ `${index}-horizontal-name` }>{obj.name}</p>
                </Link>
                <p data-testid={ `${index}-horizontal-done-date` }>{obj.doneDate}</p>

              </center>
              <button
                type="button"
                onClick={ () => share(obj) }
              >
                <img
                  alt="card"
                  data-testid={ `${index}-horizontal-share-btn` }
                  src={ shareIcon }
                />
                {' '}
              </button>
              <div className="tags">
                tags:
                { obj.tags.map((tag) => (
                  <p
                    key={ tag }
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                  >
                    {tag}
                  </p>
                ))}

              </div>

            </div>))}
      </div>
    );
  }
}

DoneAndFavoriteCards.propTypes = {
  newRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.bool.isRequired,
  share: PropTypes.func.isRequired,
};
