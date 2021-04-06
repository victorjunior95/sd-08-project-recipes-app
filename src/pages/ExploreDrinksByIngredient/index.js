import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import ContainerDefault from '../../components/ContainerDefault';
import {
  fetchIngredientDrinks,
  imgIngredienteDrink,
} from '../../services/theCockTailDB';

// import { Container } from './styles';

function ExploreDrinksByIngredient() {
  const [useingredient, setIngredient] = useState([{}]);
  console.log(fetchIngredientDrinks());
  useEffect(() => {
    const apiIngredient = async () => {
      const ingred = await fetchIngredientDrinks();
      setIngredient(ingred);
    };
    apiIngredient();
  }, []);
  const numberIngredient = 12;

  return (
    <ContainerDefault title="Explorar Ingredientes">
      <div className="d-flex flex-wrap">
        {useingredient.map((ingredient, index) => (index < numberIngredient ? (
          <Card data-testid={ `${index}-ingredient-card` } key={ index }>
            <Card.Img
              data-testid={ `${index}-card-img` }
              alt={ ingredient.strIngredient1 }
              src={ imgIngredienteDrink(ingredient.strIngredient1) }
            />
            <Card.Title data-testid={ `${index}-card-name` }>
              {ingredient.strIngredient1}
            </Card.Title>
          </Card>
        ) : null))}
      </div>
    </ContainerDefault>
  );
}

export default ExploreDrinksByIngredient;
