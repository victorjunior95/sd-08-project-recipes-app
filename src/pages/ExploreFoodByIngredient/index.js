import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import ContainerDefault from '../../components/ContainerDefault';
import { fetchIngredient, imgIngrediente } from '../../services/theMeadlDB';
// import { Container } from './styles';

function ExploreFoodByIngredient() {
  const [useingredient, setIngredient] = useState([{}]);

  useEffect(() => {
    const apiIngredient = async () => {
      const ingred = await fetchIngredient();
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
              alt={ ingredient.strIngredient }
              src={ imgIngrediente(ingredient.strIngredient) }
            />
            <Card.Title data-testid={ `${index}-card-name` }>
              {ingredient.strIngredient}
            </Card.Title>
          </Card>
        ) : null))}
      </div>
    </ContainerDefault>
  );
}

export default ExploreFoodByIngredient;
