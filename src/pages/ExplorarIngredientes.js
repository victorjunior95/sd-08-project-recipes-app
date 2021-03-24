import React, { useEffect, useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  getIngredientsFoodList,
  getIngredientsDrinkList } from '../services/BuscaNasAPIs';

const MAX_CARDS = 12;

const ExplorarIngredientes = () => {
  const [ingredientsList, setIngredientsList] = useState();
  const history = useHistory();
  const wordLength = 7;
  const startFrom = -20;
  const type = history.location.pathname.substr(startFrom, wordLength);

  useEffect(() => {
    async function getIngredients() {
      if (type === 'bebidas') {
        const list = await getIngredientsDrinkList();
        setIngredientsList(list.drinks);
      } else {
        const list = await getIngredientsFoodList();
        setIngredientsList(list.meals);
      }
    }
    getIngredients();
  }, [type]);

  const url = type === 'bebidas' ? 'thecocktaildb' : 'themealdb';
  const one = type === 'bebidas' ? 1 : '';

  return (
    <section className="w-100">
      <Header />
      <CardDeck className="m-2 d-flex flex-row flex-wrap justify-content-center">
        {
          ingredientsList && ingredientsList.map((ingredient, index) => {
            if (index < MAX_CARDS) {
              const call = `strIngredient${one}`;
              return (
                <Card
                  key={ index }
                  data-testid={ `${index}-ingredient-card` }
                  className="col-5 m-2"
                // onClick={ () => history.push(`/comidas/${comida.idMeal}`) }
                >
                  <Card.Img
                    variant="top"
                    data-testid={ `${index}-card-img` }
                    src={ `https://www.${url}.com/images/ingredients/${ingredient[call]}-Small.png` }
                  />
                  <Card.Body>
                    <Card.Title data-testid={ `${index}-card-name` }>
                      { ingredient[call] }
                    </Card.Title>
                  </Card.Body>
                </Card>
              );
            }
            return false;
          })
        }
      </CardDeck>
      <Footer />
    </section>
  );
};

export default ExplorarIngredientes;
