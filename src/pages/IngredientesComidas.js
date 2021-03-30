import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderP from '../components/HeaderP';
import Context from '../context/Context';
import { fetchListByFilter } from '../services/RequisicaoApi';
<<<<<<< HEAD
// import '../styles/Ingredientes.css';

=======
>>>>>>> main-group-7
import '../styles/ExplorarIngredientes.css';

const TWELVE_INGREDIENTS = 12;

function IngredientesComidas() {
  const { setInputText, setRadioValue, requestApiData } = useContext(Context);

  const [ingredients, setIngredients] = useState(null);
  const [redirect, setRedirect] = useState(false);

  function handleClick(e) {
    setInputText(e.currentTarget.id);
    setRadioValue('i');
    setRedirect(true);
  }

  async function getIngredients() {
    setIngredients(await fetchListByFilter('themealdb', 'i'));
  }

  useEffect(() => {
    requestApiData('themealdb');
  }, [requestApiData]);

  useEffect(() => {
    getIngredients();
  }, []);

  if (redirect) return <Redirect to="/comidas" />;

  return (
    <>
      <HeaderP title="Explorar Ingredientes" />
      <main className="ingredients-main-container">
        { ingredients && (
          ingredients.meals.slice(0, TWELVE_INGREDIENTS).map((ingredient, index) => (
            <button
              className="ingredient-card"
              data-testid={ `${index}-ingredient-card` }
              id={ ingredient.strIngredient }
              key={ index }
              onClick={ handleClick }
              type="button"
            >
              <p data-testid={ `${index}-card-name` }>{ ingredient.strIngredient }</p>
              <img
                alt="ingredient"
                className="ingredient-img"
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              />
            </button>
          ))
        )}
      </main>
      <Footer />
    </>
  );
}

export default IngredientesComidas;
