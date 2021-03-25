import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import Context from '../../contextApi/Context';

const CardDetails = ({ title, object, isLoading, location: { pathname } }) => {
  const { receitaAtu,
    setReceita } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState();
  const [localUrl, setLocalUrl] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [save, setSave] = useState(false);
  console.log(object);
  useEffect(() => {
    const saveURL = () => {
      setLocalUrl(`http://localhost:3000${pathname}`);
    };
    saveURL();
  }, []);

  const savetoClipboard = () => {
    window.navigator.clipboard.writeText(localUrl);
    setSave(true);
  };

  /*  useEffect(() => {
    const setFavoriteButton = () => {
      const bla = JSON.parse(localStorage.getItem('favoriteRecipes'));
      console.log(bla);
    };
    setFavoriteButton();
  }, []); */
  console.log(JSON.parse(localStorage.getItem('favoriteRecipes')));
  const savetoFavoritest = () => {
    favorite === false ? setFavorite(true) : setFavorite(false);

    // const arrayInicial = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const { idMeal, strCategory, strArea, strMeal, strAlcoholic, strDrinkThumb, strDrink, idDrink, strMealThumb } = object;

    if (title === 'Comidas' && favorite === false) {
      const Objectid = { id: idMeal, type: 'comida', area: strArea, category: strCategory, alcoholicOrNot: '', name: strMeal, image: strMealThumb };
      localStorage.setItem('favoriteRecipes', JSON.stringify([Objectid]));
    } if (title === 'Bebidas' && favorite === false) {
      const Objectid = { id: idDrink, type: 'bebida', area: '', category: strCategory, alcoholicOrNot: strAlcoholic, name: strDrink, image: strDrinkThumb };
      localStorage.setItem('favoriteRecipes', JSON.stringify([Objectid]));
    }
    // console.log(arrayInicial, 'bla');
    // favorite === true && localStorage.setItem('favoriteRecipes', JSON.stringify(arrayInicial))
  };

  console.log(object);
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
            onClick={ () => savetoClipboard() }
          >
            {save ? 'Link copiado!'

              : <img
                  src={ shareIcon }
                  alt="Profile icon"

              />}

          </Button>

          {' '}
          <Button
            variant="outline-secondary"
            data-testid="favorite-btn"
            onClick={ () => savetoFavoritest() }
          >
            { favorite || localUrl === isFavorite
              ? <img
                  src={ blackHeartIcon }
                  alt="Profile icon"
              /> : <img
                src={ whiteHeartIcon }
                alt="Profile icon"
              />}
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
