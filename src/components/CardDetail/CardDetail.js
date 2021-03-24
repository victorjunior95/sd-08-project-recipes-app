import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

const CardDetails = ({ title, object, isLoading, children }) => {
  
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
          {children}
          <Card.Text data-testid="instructions">
            { object.strInstructions }
          </Card.Text>
          {renderVideo()}
          <Card.Text data-testid="0-recomendation-card">
            Aqui virá o card das recomendações
          </Card.Text>
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
