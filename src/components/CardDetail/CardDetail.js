import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

const CardDetails = ({ title, object, isLoading }) => {
  const renderIngredientList = () => {
    const listKeys = Object.keys(object);
    const ingredients = listKeys.filter((key) => key.includes('strIngredient'));

    const listKeysMeasure = Object.keys(object);
    const measures = listKeysMeasure.filter((key) => key.includes('strMeasure'));

    return ingredients.map((ingredient, index) => {
      if (object[ingredient]) {
        return (
          <ListGroup.Item
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${object[ingredient]} - ${object[measures[index]]}`}
          </ListGroup.Item>);
      }
      return true;
    });
  };

  // é preciso trocar watch por embed na url do youtube
  const renderVideo = () => {
    if (title === 'Comidas') {
      return (
        <iframe
          data-testid="video"
          width="300"
          height="200"
          src={ object.strYoutube }
          frameBorder="0"
          allowFullScreen
          title="vídeo"
        />
      );
    }
  };

  if (isLoading === true) {
    return (
      <div>Loading</div>
    );
  } if (isLoading === false && object !== {}) {
    return (
      <Card
        style={ { width: '18rem' } }
      >
        <Card.Img
          data-testid="recipe-photo"
          variant="top"
          src={ (title === 'Comidas') ? object.strMealThumb : object.strDrinkThumb }
        />
        <Card.Body>
          <Card.Title
            data-testid="recipe-title"
          >
            { (title === 'Comidas') ? object.strMeal : object.strDrink}
          </Card.Title>
          <Button
            variant="outline-secondary"
            data-testid="share-btn"
          >
            <img
              src={ shareIcon }
              alt="Profile icon"
              data-testid="explore-bottom-btn"
            />
          </Button>
          {' '}
          <Button
            variant="outline-secondary"
            data-testid="favorite-btn"
          >
            <img
              src={ whiteHeartIcon }
              alt="Profile icon"
              data-testid="explore-bottom-btn"
            />
          </Button>
          {' '}
          <Card.Text data-testid="recipe-category">
            { (title === 'Comidas') ? object.strCategory : object.strAlcoholic}
          </Card.Text>
          <ListGroup>
            Ingredientes:
            {renderIngredientList()}
          </ListGroup>
          <Card.Text data-testid="instructions">
            { object.strInstructions }
          </Card.Text>
          {renderVideo()}
          <Card.Text data-testid="0-recomendation-card">
            Aqui virá o card das recomendações
          </Card.Text>
          <Button
            variant="primary"
            data-testid="start-recipe-btn"
          >
            Iniciar receita
          </Button>
        </Card.Body>
      </Card>
    );
  }
};

CardDetails.propTypes = {
  title: PropTypes.string.isRequired,
  object: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
  index: PropTypes.string.isRequired,
};

export default CardDetails;
