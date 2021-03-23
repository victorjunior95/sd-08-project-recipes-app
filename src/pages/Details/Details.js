import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getMeal from '../../services/requestMealForId';
import getDrink from '../../services/RequestDrinkForId';
import CardDetails from '../../components/CardDetail/CardDetail';
import Context from '../../contextApi/Context';
import Button from 'react-bootstrap/Button';

const Details = ({ title, match, history }) => {
  const { params: { id } } = match;

  const {
    setProductDetails
  } = useContext(Context);

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
      return () => setProductDetails(
        {object: object,
        isLoading: isLoading,
    })
    })();
  }, []);

  const handleClick = ( ) => {
    if (title = 'Comidas') {
      history.push(`/comidas/${id}/in-progress`);
    } else {
      history.push(`/bebidas/${id}/in-progress`);
    }
    
  }

  return (
    <>
    <CardDetails title={ title } object={ object } isLoading={ isLoading } />
    <Button
            variant="primary"
            data-testid="start-recipe-btn"
            onClick={ handleClick }
          >
            Iniciar receita
    </Button>
    </>
    
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  object: PropTypes.shape({ }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Details;
