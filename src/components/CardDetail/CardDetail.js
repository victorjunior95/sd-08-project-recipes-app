import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import { recomendedRecipes } from '../../services/FoodsDrinksRequests';
import SlideCards from '../SlideCards/SlideCards';
import './cardDetail.css';

const CardDetails = ({ title, object, isLoading, children }) => {
  const [recomended, setRecomended] = useState([]);

  useEffect(() => {
    recomendedRecipes(title).then((response) => setRecomended(response));
  }, []);

  // é preciso trocar watch por embed na url do youtube
  const renderVideo = () => {
    if (title === 'Comidas' && object.strYoutube !== undefined) {
      const urlVideo = object.strYoutube.replace('watch', 'embed');
      return (
        <iframe
          data-testid="video"
          width="300"
          height="200"
          src={urlVideo}
          frameBorder="0"
          allowFullScreen
          title="vídeo"
        />
      );
    }
  };

  if (isLoading === true) {
    return <div>Loading</div>;
  }
  if (isLoading === false && object !== {}) {
    return (
      <Card>
        <Card.Img
          data-testid="recipe-photo"
          variant="top"
          src={title === 'Comidas' ? object.strMealThumb : object.strDrinkThumb}
        />
        <Card.Body>
          <Card.Title data-testid="recipe-title">
            {title === 'Comidas' ? object.strMeal : object.strDrink}
          </Card.Title>
          <Button variant="outline-secondary" data-testid="share-btn">
            <img
              src={shareIcon}
              alt="Profile icon"
              data-testid="explore-bottom-btn"
            />
          </Button>{' '}
          <Button variant="outline-secondary" data-testid="favorite-btn">
            <img
              src={whiteHeartIcon}
              alt="Profile icon"
              data-testid="explore-bottom-btn"
            />
          </Button>{' '}
          <Card.Text data-testid="recipe-category">
            {title === 'Comidas' ? object.strCategory : object.strAlcoholic}
          </Card.Text>
          {children}
          <Card.Text data-testid="instructions">
            {object.strInstructions}
          </Card.Text>
          {renderVideo()}
          <span>Recomendações</span>
          <SlideCards
            title={title === 'Comidas' ? 'Bebidas' : 'Comidas'}
            results={recomended}
            numberOfCards={6}
          />
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
