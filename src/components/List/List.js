import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cards from '../Card/Cards';
import {
  getAllRecipes,
  getRecipesByIngredient,
} from '../../services/FoodsDrinksRequests';
import Context from '../../contextApi/Context';

const List = ({ title, results, refCard }) => {
  const CARDSFORPAGE = 12;

  const { results: prevResults, setResults } = useContext(Context);

  useEffect(() => {
    if (prevResults.length === 0) {
      getAllRecipes(title).then((response) => {
        setResults(response);
      });
    }
  }, [title]);

  console.log(prevResults);

  const handleClick = (event) => {
    console.log(event.target.innerText);

    // Filtragem sem requisição
    // const recipeContainingIngredient = prevResults.filter((recipe, index) => {
    //   const listValues = Object.values(recipe);
    //   // console.log(recipe)
    //   // console.log(listValues)
    //   const existIngredient = listValues.includes(event.target.innerText)
    //   // console.log(existIngredient)
    //   if (existIngredient) {
    //     return recipe
    //   }
    // });
    // console.log(recipeContainingIngredient)
    // setResults(recipeContainingIngredient)

    //Filtragem com requisição
    getRecipesByIngredient(title, event.target.innerText).then((response) => {
      setResults(response);
    });
  };

  if (results && refCard === 'ingredients') {
    // console.log(results)
    return (
      <div>
        Teste
        {results.map((object, index) => {
          if (index < CARDSFORPAGE) {
            return (
              <Link
                id={
                  title === 'Explorar Ingredientes de Comidas'
                    ? object.strIngredient
                    : object.strIngredient1
                }
                onClick={handleClick}
                to={
                  title === 'Explorar Ingredientes de Comidas'
                    ? `/comidas`
                    : `/bebidas`
                }
              >
                <Cards
                  key={
                    title === 'Explorar Ingredientes de Comidas'
                      ? object.strIngredient
                      : object.strIngredient1
                  }
                  object={object}
                  title={title}
                  index={index}
                  refCard={refCard}
                />
              </Link>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <>
        {results.map((object, index) => {
          if (index < CARDSFORPAGE) {
            return (
              <Link
                to={
                  title === 'Comidas'
                    ? `/comidas/${object.idMeal}`
                    : `/bebidas/${object.idDrink}`
                }
              >
                <Cards
                  key={title === 'Comidas' ? object.idMeal : object.idDrink}
                  object={object}
                  title={title}
                  index={index}
                />
              </Link>
            );
          }
        })}
      </>
    );
  }
};
List.propTypes = {
  title: PropTypes.string.isRequired,
  results: PropTypes.arrayOf.isRequired,
};

export default List;
