import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cards from '../Card/Cards';
import { getAllRecipes, getRecipesByIngredient } from '../../services/FoodsDrinksRequests';
import Context from '../../contextApi/Context';
import Button from 'react-bootstrap/Button';
import getMeal from '../../services/requestMealForId';
import getDrink from '../../services/RequestDrinkForId';
import { Redirect } from 'react-router-dom';

const List = ({ title, results, refCard}) => {
  const CARDSFORPAGE = 12;

  const { results: prevResults , setResults } = useContext(Context);
  const [activatedFilters, setActivatedFilters] = useState([]);
  const [manipulatedResult, setManipulatedResult] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [recipesByIngredient, setRecipesByIngredient] = useState([]);


    useEffect(() => {
      if (prevResults.length === 0) {
        getAllRecipes(title).then((response) => {
          setResults(response);
        });
      }
    }, [title]);

    // console.log(prevResults)

    const handleClick = (event) => {
      console.log(event.target.innerText)

      // // Filtragem sem requisição
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

    }

    const handleClickToFilter = (event) => {
      if (activatedFilters.includes(event.target.id)) {
        setActivatedFilters( activatedFilters.filter(element => element !== event.target.id))
      } else {
        setActivatedFilters([
          ...activatedFilters, event.target.id ])
      }
    }

    const getMealOrDrink = async (id) => {
      if (title === 'Explorar Ingredientes de Comidas') {
        const meal = await getMeal(id);
        // console.log(meal);
        return meal;
      } else {
        const drink = await getDrink(id);
        // console.log(drink);
        return drink;
      }
    };

    const handleClickToRecipes = () => {
      setRedirect(true)
    }

    useEffect( () => {
      if (activatedFilters.length !== 0) {
        getRecipesByIngredient(title, activatedFilters[0]).then( (response) => {
          setRecipesByIngredient(response);
        });
      }
    }, [activatedFilters])

    useEffect(() => {
      if (activatedFilters.length !== 0) {
        (async () => {
          if (recipesByIngredient.length !== 0) {
            console.log(recipesByIngredient[0].idMeal)
            let manipulatedList = []
            for (let index = 0; index < recipesByIngredient.length; index += 1) {
              const teste = await getMealOrDrink(recipesByIngredient[index].idMeal);
              manipulatedList = [...manipulatedList, teste];
            }
            console.log(manipulatedList)
  
            // Tentativa usando HOF (Não deu certo)
  
            // const teste = await getMealOrDrink(recipesByIngredient[0].idMeal);
            // console.log(teste)
            // const manipulatedResults = await recipesByIngredient.map( async (recipe) => await getMealOrDrink(title === 'Explorar Ingredientes de Comidas' ? recipe.idMeal : recipe.idDrink))
            // console.log(manipulatedResults)
  
            activatedFilters.forEach((ingredient, index) => {
              manipulatedList = manipulatedList.filter((recipe, index) => {
                const listValues = Object.values(recipe);
                // console.log(recipe)
                // console.log(listValues)
                const existIngredient = listValues.includes(ingredient)
                // console.log(existIngredient)
                if (existIngredient) {
                  return recipe
                }
              });
              console.log(manipulatedList)
            });
            setManipulatedResult(manipulatedList)
          }
        })();
      }
    }, [activatedFilters])

    useEffect(() => {
      // if (prevResults.length === 0) {
        setResults(manipulatedResult)
      // }
    }, [manipulatedResult]);

    // useEffect(() => {
    //   // if (prevResults.length === 0) {
    //     setRedirect(true)
    //   // }
    // }, [prevResults]);
      

    // activatedFilters.forEach((ingredient, index) => {
    //   if (index > 0) {
    //     console.log(response)
    //     response = response.filter((recipe, index) => {

    //       const listValues = Object.values(recipe);
    //       // console.log(recipe)
    //       // console.log(listValues)
    //       const existIngredient = listValues.includes(ingredient)
    //       // console.log(existIngredient)
    //       if (existIngredient) {
    //         return recipe
    //       }
    //     })
    //     // console.log(response)
    //     return response
    //   }
    // });

  if (results && refCard === "ingredients") {
    // console.log(results)
    return (
      <>
        {redirect && <Redirect to={ title === 'Explorar Ingredientes de Comidas'
                  ? `/comidas`
                  : `/bebidas` } />}
        <Button
              className="btn btn-primary w-100"
              onClick={handleClickToRecipes}
              >
                Filtrar
              </Button>
        {results.map((object, index) => {
          if (index < CARDSFORPAGE) {
            return (
              <>
                <Link
                id={title === 'Explorar Ingredientes de Comidas' ? object.strIngredient : object.strIngredient1}
                onClick={handleClick}
                to={ title === 'Explorar Ingredientes de Comidas'
                  ? `/comidas`
                  : `/bebidas` }
              >
                <Cards
                  key={ title === 'Explorar Ingredientes de Comidas' ? object.strIngredient : object.strIngredient1 }
                  object={ object }
                  title={ title }
                  index={ index }
                  refCard= { refCard }
                />
              </Link>
              <Button
              className="btn btn-primary w-100"
              id={ title === 'Explorar Ingredientes de Comidas' ? object.strIngredient : object.strIngredient1 }
              onClick={handleClickToFilter}
              >
                {activatedFilters.includes(title === 'Explorar Ingredientes de Comidas' ? object.strIngredient : object.strIngredient1) ? "-" : "+"}
              </Button>
              </>
            );
          }
        })}
      </>
    );
  } else {
    return (
      <>
        {results.map((object, index) => {
          if (index < CARDSFORPAGE) {
            return (
              <Link
                to={ title === 'Comidas'
                  ? `/comidas/${object.idMeal}`
                  : `/bebidas/${object.idDrink}` }
                
              >
                <Cards
                  key={ title === 'Comidas' ? object.idMeal : object.idDrink }
                  object={ object }
                  title={ title }
                  index={ index }
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
