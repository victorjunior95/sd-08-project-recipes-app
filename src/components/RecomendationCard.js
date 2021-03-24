import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class RecomendationCard extends Component {
  render() {
    const { recomendation: {
      strMealThumb,
      strMeal,
      strCategory,
      idMeal,
      strDrinkThumb,
      strDrink,
      idDrink,
      // strAlcoholic,
    }, index, setNewRecipe, history } = this.props;
    return (
      <Card
        style={ { width: '18rem' } }
        data-testid={ `${index}-recomendation-card` }
      >
        <Card.Img variant="top" src={ strMealThumb || strDrinkThumb } />
        <Card.Body>
          <Card.Title
            data-testid={ `${index}-recomendation-title` }
          >
            { strMeal || strDrink }
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            { strCategory }
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card&apos;s content.
          </Card.Text>

          <Button
            variant="primary"
            onClick={ () => {
              if (idMeal) {
                history.push(`/comidas/${idMeal}`);
              }
              if (idDrink) {
                history.push(`/bebidas/${idDrink}`);
              }
              setNewRecipe();
            } }
          >
            Go somewhere
          </Button>

        </Card.Body>
      </Card>
    );
  }
}

RecomendationCard.propTypes = {
  recomendation: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    idMeal: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    idDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  setNewRecipe: PropTypes.func.isRequired,
};

export default withRouter(RecomendationCard);
