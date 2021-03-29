import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as mealApi from '../services/mealApi';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import previousIcon from '../images/previousIcon.svg';
import LoadingScreen from '../components/LoadingScreen';
import PrimaryButton from '../components/PrimaryButton';

import styles from '../styles/pages/MealsDetails.module.css';

const MealsDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  // const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    mealApi.getById(id).then((response) => {
      setMeal(response.meals[0]);
      setIsFetching(false);
    });
  }, []);

  useEffect(() => {
    const ingredientKeys = Object.keys(meal)
      .filter((item) => item.includes('Ingredient'));
    const measureKeys = Object.keys(meal).filter((item) => item.includes('Measure'));
    const measureList = measureKeys.map((measure) => meal[measure])
      .filter((item) => item !== '' && item !== null);
    const ingredientList = ingredientKeys.map((key) => meal[key])
      .filter((item) => item !== '' && item !== null);
    setIngredients(ingredientList);
    setMeasures(measureList);
  }, [meal]);

  if (isFetching) return <LoadingScreen />;

  function renderHeader() {
    return (
      <div className={ styles.header }>
        <div className={ styles.row }>
          <h2 data-testid="recipe-title">{meal.strMeal}</h2>
          <div className={ styles.controls }>
            <a href="/" data-testid="share-btn">
              <img src={ shareIcon } alt="Share Icon" />
            </a>
            <a href="/" data-testid="favorite-btn">
              <img src={ whiteHeartIcon } alt="Share Icon" />
            </a>
          </div>
        </div>
        <p
          className={ styles.category }
          data-testid="recipe-category"
        >
          { meal.strCategory}
        </p>
      </div>
    );
  }

  function renderIngredients() {
    return (
      <div className={ styles.ingredientsContainer }>
        <h2>Ingredients</h2>
        <section className={ styles.ingredients }>
          {ingredients
            .map((ingredient, index) => (
              <p
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {`${ingredient}: ${measures[index]}`}
              </p>))}
        </section>
      </div>
    );
  }

  function renderInstructions() {
    return (
      <div className={ styles.instructionsContainer }>
        <h2>Instructions</h2>
        <div className={ styles.instructions }>
          <p data-testid="instructions">
            { meal.strInstructions }
          </p>
        </div>
      </div>
    );
  }

  function renderVideo() {
    return (
      <div className={ styles.videoContainer }>
        <h2>Vídeo</h2>
        <iframe
          data-testid="video"
          title="qualquer coisa"
          width="560"
          height="315"
          src={ meal.strYoutube.replace('watch?v=', 'embed/') }
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div>
      <a className={ styles.homeButton } href="/comidas">
        <img src={ previousIcon } alt="Meals button icon" />
      </a>
      <div
        style={ { backgroundImage: `url(${meal.strMealThumb})` } }
        className={ styles.photo }
        data-testid="recipe-photo"
      />

      <div className={ styles.mealsDetailsContainer }>
        { renderHeader() }
        { renderIngredients() }
        { renderInstructions() }
        { renderVideo() }
        <PrimaryButton>Iniciar Receita</PrimaryButton>
        {/* <CardsContainer>
          {recomendations
            .map((cocktail, index) => (
              <Card
                key={ index }
                name={ cocktail.strCocktail }
                thumbnail={ cocktail.strMealThumb }
                index={ index }
                data-testid={ `${index}-recomendation-card` }
              />))}
        </CardsContainer> */}

        {/* <button
          type="button"
          data-testid="start-recipe-btn"
        >
          Iniciar Recita
        </button> */}
      </div>
    </div>
  );
};

export default MealsDetails;
