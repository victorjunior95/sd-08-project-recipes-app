import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InProgressCard from '../../components/Card/InProgressCard';
import { getFoodFiltredById } from '../../services/api';

function FoodInProgress(props) {
  const { match: { url, params: { id } } } = props;
  const [filteredById, setFilteredById] = useState('');
  const [ingredientsAndMeasuresList, setIngredientsAndMeasuresList] = useState([]);
  const isEmpty = (obj) => Object.keys(obj).length === 0; // verifica se o objeto está vazio;

  function createIngredientList(receita) {
    const ING_INDEX = 15;
    let ingredientList = [];
    let quantitiesList = [];
    for (let i = 1; i <= ING_INDEX; i += 1) {
      ingredientList = [...ingredientList, receita[`strIngredient${i}`]];
      quantitiesList = [...quantitiesList, receita[`strMeasure${i}`]];
    }
    const ingredientAndMeasure = quantitiesList
      .filter((qua) => qua !== null && qua !== '')
      .map((mes, index) => `${mes} ${ingredientList[index]}`);
    return setIngredientsAndMeasuresList(ingredientAndMeasure);
  }

  useEffect(() => {
    const requestingAPI = async () => {
      const fetchById = await getFoodFiltredById(id);
      setFilteredById(fetchById);
    }; requestingAPI();
  }, [id]);

  useEffect(() => {
    if (!isEmpty(filteredById)) {
      console.log('IS NOT EMPTY');
      createIngredientList(filteredById);
    }
  }, [filteredById]);

  const { strCategory,
    strMeal, strMealThumb, strInstructions } = filteredById;
  return (
    <div>
      {!isEmpty(filteredById) ? <InProgressCard
        url={ url }
        id={ id }
        category={ strCategory }
        title={ strMeal }
        img={ strMealThumb }
        ingredients={ ingredientsAndMeasuresList }
        // alcohol={ strAlcoholic }
        instructions={ strInstructions }
      /> : <h1>Carregando comida...</h1> }
      {console.log(window.location.href)}

    </div>
  );
}

FoodInProgress.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default FoodInProgress;
