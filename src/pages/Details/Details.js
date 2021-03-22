import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Context from '../../contextApi/Context';
import getMeal from '../../services/requestMealForId';
import getDrink from '../../services/RequestDrinkForId';

const Details = ({ title, match }) => {
  const { params: { id } } = match;
  // const { results } = useContext(Context);
  // const result = results.filter(
  //   (element) => element.idMeal === id || element.idDrink === id,
  // );

  const getMealOrDrink = async () => {
    if (title === 'Comidas') {
      const meal = await getMeal(id);
      console.log(meal);
    } else {
      const drink = await getDrink(id);
      console.log(drink);
    }
  };

  getMealOrDrink();
  return (
    <div>teste</div>
    // <Card
    //   // data-testid={ `${index}-recipe-card` }
    //   style={ { width: '18rem' } }
    // >
    //   <Card.Img
    //     data-testid="recipe-photo"
    //     variant="top"
    //     src={ (title === 'Comidas') ? result[0].strMealThumb : result[0].strDrinkThumb }
    //   />
    //   <Card.Body>
    //     <Card.Title
    //       data-testid={ `${index}-card-name` }
    //     >
    //       { (title === 'Comidas') ? object.strMeal : object.strDrink}
    //     </Card.Title>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
  );
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
