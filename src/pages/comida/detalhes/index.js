import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { requestDrinkRecipe, requestFoodId } from '../../../services/API';
import FoodContext from '../../../context/comidaContext/FoodContext';
import GlobalContext from '../../../context/globalContext/GlobalContext';
import CardFoodDetails from '../../../components/Cards/CardFoodDetails';
import './index.css';
import DrinkRecomendation from '../../../components/Carousel/DrinkRecomendation';

function startRecipe() {

}

function ComidaDetalhes() {
  const {
    functions: {
      setDetailsFoods,
      setRecomendations,
    },
  } = useContext(FoodContext);

  const {
    inProgressRecipes: {
      meals,
    },
  } = useContext(GlobalContext);

  const { idDaReceita } = useParams();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchFood = async () => {
      const request = await requestFoodId(idDaReceita);
      setDetailsFoods(request.meals);
    };
    fetchFood();
  }, [setDetailsFoods, idDaReceita]);

  useEffect(() => {
    const fetchDrinks = async () => {
      const request = await requestDrinkRecipe();
      setRecomendations(request.drinks);
    };
    fetchDrinks();
  }, [setRecomendations]);

  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const alreadyFavorited = favorites.some((obj) => obj.id === idDaReceita);

  const recipeStarted = Object.keys(meals).some((id) => id === idDaReceita);

  if (redirect) return <Redirect to="/comidas/:idDaReceita/in-progress" />;

  return (
    <section>
      <CardFoodDetails alreadyFavorited={ alreadyFavorited } />
      <DrinkRecomendation />
      <button
        type="button"
        onClick={ () => { setRedirect(true); } }
      >
        {(recipeStarted) ? 'Continuar Receita' : 'Iniciar Receita'}
      </button>
    </section>
  );
}

export default ComidaDetalhes;
