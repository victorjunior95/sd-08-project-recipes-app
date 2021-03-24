import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getMeal from '../../services/requestMealForId';
import getDrink from '../../services/RequestDrinkForId';
import CardDetails from '../../components/CardDetail/CardDetail';
import Context from '../../contextApi/Context';
import CheckBoxIngredients from '../../components/CheckBoxIngredients/CheckBoxIngredients';
import Button from 'react-bootstrap/Button';

const RecipesInProgress = ({ title, match }) => {
  const { params: { id } } = match;

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

  return (
    <>
      <CardDetails title={ title } object={ object } isLoading={ isLoading }>
        <CheckBoxIngredients object={ object } />
      </CardDetails>
      <Button
            variant="primary"
            data-testid="finish-recipe-btn"
          >
            Iniciar receita
      </Button>
    </>
    
    
  );
};

RecipesInProgress.propTypes = {
  title: PropTypes.string.isRequired,
  object: PropTypes.shape({ }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default RecipesInProgress;
