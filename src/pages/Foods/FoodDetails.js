import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import copy from 'clipboard-copy';
import useFoodDetailsHook from '../hooks/useFoodDetailsHook';
import { DrinkCtx } from '../../context/ContextDrink';
import CarouselCard from '../../components/Card/CarouselCard';
import './FoodDetail.css';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import useFavoritesHook from '../hooks/useFavoritesHook';
import useInProgressRecipeHook from '../hooks/useInProgressRecipeHook';

function FoodDetails(props) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { match: { params: { id } } } = props;
  const { drinkApi: { drinks } } = useContext(DrinkCtx);
  const [favorites, updateFavorites] = useFavoritesHook();
  const STOP_INDEX = 5;
  const [
    setId,
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    strYoutube,
    strArea,
    ingredientsAndMeasuresList,
  ] = useFoodDetailsHook();

  useEffect(() => {
    setId(id);
  }, [id, setId]);

  useEffect(() => {
    console.log('favoritos:', favorites);
    function checkIsFavorite() {
      return favorites
        .find((fav) => fav.id === id)
        ? setIsFavorite(true)
        : setIsFavorite(false);
    }
    checkIsFavorite();
  }, [id, favorites]);

  function handleClick() {
    copy(window.location.href);
    setCopied(true);
  }

  function handleFavorite() {
    const newRecipe = {
      id,
      type: 'comida',
      area: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };
    updateFavorites(newRecipe, isFavorite);
    setIsFavorite(!isFavorite);
  }

  function handleStartRecipeClick() {
  }

  return (
    <>
      { shouldRedirect && <Redirect to={ `/comidas/${id}/in-progress` } /> }
      <div className="recipe-container">
        <h2 data-testid="recipe-title">{ strMeal }</h2>
        <span data-testid="recipe-category">{ strCategory }</span>
        <div className="icons">
          <button type="button" data-testid="share-btn" onClick={ handleClick }>
            <img src={ shareIcon } alt="Compartilhar" />
            {copied && 'Link copiado!'}
          </button>
          <button
            type="button"
            onClick={ handleFavorite }
          >
            <img
              data-testid="favorite-btn"
              src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
              alt="Compartilhar"
            />
          </button>
        </div>
        <img
          className="detail-image"
          data-testid="recipe-photo"
          src={ strMealThumb }
          alt="Recipe pic"
        />
        <div>
          <iframe
            data-testid="video"
            width="280"
            height="157"
            src={ strYoutube }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;
              autoplay; clipboard-write;
              encrypted-media;
              gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <ul>
          { ingredientsAndMeasuresList
            .filter((ingr) => ingr !== '' && ingr !== null)
            .map(
              (ing, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {ing}
                </li>),
            ) }
        </ul>
        <p data-testid="instructions">{ strInstructions }</p>
      </div>
      <div className="carousel-wraper">
        <div className="carousel">
          {drinks && drinks
            .filter((drink, index) => index <= STOP_INDEX)
            .map((item, index) => (
              <CarouselCard
                key={ item.idDrink }
                id={ item.idDrink }
                name={ item.strDrink }
                img={ item.strDrinkThumb }
                index={ index }
              />
            ))}
          <button
            className="start-btn"
            type="button"
            data-testid="start-recipe-btn"
            onClick={ handleStartRecipeClick }
          >
            Iniciar
          </button>
        </div>
      </div>
    </>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodDetails;
