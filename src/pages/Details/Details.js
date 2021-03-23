import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import getMeal from '../../services/requestMealForId';
import getDrink from '../../services/RequestDrinkForId';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

const Details = ({ title, match }) => {
  const { params: { id } } = match;
  // const { results } = useContext(Context);
  // const result = results.filter(
  //   (element) => element.idMeal === id || element.idDrink === id,
  // );

  const [object, setObject] = useState({});
  const [isLoading, setLoad] = useState(false);

  const getMealOrDrink = async () => {
    if (title === 'Comidas') {
      const meal = await getMeal(id);
      console.log(meal);
      return meal;
    }
    const drink = await getDrink(id);
    console.log(drink);
    return drink;
  };

  useEffect(() => {
    (async () => {
      setLoad(true);
      const mealOrDrink = await getMealOrDrink();
      setObject(mealOrDrink);
      setLoad(false);
    })();
  }, []);

  // return (
  //   <div>
  //     teste
  //   </div>
  // );
  // const renderIngredientList = () => {
  //   for (let index = 1; index < 50; index += 1) {
  //     // if (object[`strIngredient${index}`]
  //     //   !== null
  //     //   // && object[`strIngredient${index}`] !== ''
  //     // ) {
  //     return (
  //       <ListGroup.Item>{object[`strIngredient${index}`]}</ListGroup.Item>
  //     );
  //     // }
  //   }
  // };

  const renderIngredientList = () => {
    const listKeys = Object.keys(object);
    console.log(listKeys);
    const ingredients = listKeys.filter((key) => key.includes('strIngredient'));
    console.log(ingredients);
    return ingredients.map((ingredient, index) => {
      if (object[ingredient]) {
        return (
          <ListGroup.Item
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {object[ingredient]}
          </ListGroup.Item>);
      }
    });
  };

  const renderVideo = () => {
    if (title === 'Comidas') {
      return (
        <video
          width="320"
          height="240"
          controls
          data-testid="video"
        >
          <track src={ object.strYoutube } />
          <source src={ object.strYoutube } />
        </video>
      );
    }
  };

  if (isLoading === true) {
    return (
      <div>Loading</div>
    );
  } if (isLoading === false && object !== {}) {
    return (
      // <div>teste</div>
      <Card
        // data-testid={ `${index}-recipe-card` }
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
            { object.strCategory }
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
          >Iniciar receita</Button>
        </Card.Body>
      </Card>
    );
  }
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  object: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
  index: PropTypes.string.isRequired,
};

export default Details;
