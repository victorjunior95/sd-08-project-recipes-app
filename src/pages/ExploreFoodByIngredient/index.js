import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import ContainerDefault from '../../components/ContainerDefault';
import { filterMealsByIngrendient } from '../../redux/actions';
import { fetchIngredient, imgIngrediente } from '../../services/theMeadlDB';
// import { Container } from './styles';

function ExploreFoodByIngredient() {
  const [useingredient, setIngredient] = useState([{}]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const apiIngredient = async () => {
      const ingred = await fetchIngredient();
      setIngredient(ingred);
    };
    apiIngredient();
  }, []);

  const mealsByIngredient = (ingredient, e) => {
    e.preventDefault();
    dispatch(filterMealsByIngrendient(ingredient));
    history.push('/comidas');
  };
  const numberIngredient = 12;
  return (
    <ContainerDefault title="Explorar Ingredientes">
      <div className="d-flex flex-wrap">
        {useingredient.map((ingredient, index) => (index < numberIngredient ? (
          <Card
            data-testid={ `${index}-ingredient-card` }
            key={ index }
            onClick={ (e) => mealsByIngredient(ingredient.strIngredient, e) }
          >
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
