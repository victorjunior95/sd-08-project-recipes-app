import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getMeal from '../../services/requestMealForId';
import getDrink from '../../services/RequestDrinkForId';
import CardDetails from '../../components/CardDetail/CardDetail';
import Context from '../../contextApi/Context';
import Button from 'react-bootstrap/Button';
import ListIngredients from '../../components/ListIngredients/ListIngredients';

const Details = ({ title, match, history }) => {
  const {
    params: { id },
  } = match;

  const { setProductDetails } = useContext(Context);

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

  // Simulação do doneRecipes
  useEffect(() => {
    const doneRecipes = (title === "Comidas")
    ? [{
      "id": "52771",
      "type": "comida",
      "area": "Italian",
      "category": "Vegetarian",
      "alcoholicOrNot": "",
      "name": "Spicy Arrabiata Penne",
      "image": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      "doneDate": "22/6/2020",
      "tags": ["Pasta", "Curry"]
    }]
    : [{
      "id": "178319",
      "type": "bebida",
      "area": "",
      "category": "Cocktail",
      "alcoholicOrNot": "Alcoholic",
      "name": "Aquamarine",
      "image": "https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg",
      "doneDate": "23/6/2020",
      "tags": []
    }];
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  }, [])

  const handleClick = () => {
    setProductDetails({ object: object, isLoading: isLoading });
    if (title === 'Comidas') {
      history.push(`/comidas/${id}/in-progress`);
    } else {
      history.push(`/bebidas/${id}/in-progress`);
    }
  };

  const renderButton = () => {
  if( localStorage.getItem('doneRecipes') ) {

    const doneRecipes = JSON.parse(localStorage.getItem("doneRecipes"));
    const isDoneRecipe = doneRecipes.some(recipe => id === recipe.id);
    if (!isDoneRecipe) {
      return (
        <Button
        className="btn-recipe btn btn-primary w-100"
        data-testid="start-recipe-btn"
        onClick={handleClick}
      >
        Iniciar receita
      </Button>
      )
    } 
  }
  }

  // De repente eu tenha que colocar o load aqui, por causa do botão
  return (
    <>
      <CardDetails title={title} object={object} isLoading={isLoading}>
        <ListIngredients object={object} />
      </CardDetails>
      {renderButton()}
    </>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  object: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default Details;
