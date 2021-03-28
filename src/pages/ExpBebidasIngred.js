import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import Footer from '../components/Footer';
import { requestDrinksIngredientsList } from '../services/apiRequests';

function ExplorarBebidasIngredientes() {
  const history = useHistory();
  const MIN_INDEX = 0;
  const MAX_INDEX = 12;
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    const requestByIngredients = async () => {
      const ingredients = await requestDrinksIngredientsList();
      console.log(ingredients);
      setIngredientsList(ingredients);
    };
    requestByIngredients();
  }, []);

  if (!ingredientsList) return <span>Loading...</span>;

  return (
    <div>
      <div>
        <HeaderWithoutSearch />
      </div>
      <div>
        {
          ingredientsList.slice(MIN_INDEX, MAX_INDEX)
            .map(({ strIngredient1 }, index) => (
              <button
                type="button"
                key={ strIngredient1 }
                data-testid={ `${index}-ingredient-card` }
                onClick={ () => history.push('/bebidas') }
              >
                <img
                  src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                  alt={ strIngredient1 }
                  data-testid={ `${index}-card-img` }
                />
                <span
                  data-testid={ `${index}-card-name` }
                >
                  { strIngredient1 }
                </span>
              </button>
            ))
        }
        ;
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ExplorarBebidasIngredientes;
