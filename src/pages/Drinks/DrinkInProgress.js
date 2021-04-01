import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InProgressCard from '../../components/Card/InProgressCard';
import { getDrinkFiltredById } from '../../services/api';

function DrinkInProgress(props) {
  const { match: { path, params: { id } } } = props;
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
      const fetchById = await getDrinkFiltredById(id);
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
    strDrink, strDrinkThumb, strAlcoholic, strInstructions } = filteredById;
  return (
    <div>
      {!isEmpty(filteredById) ? <InProgressCard
        path={ path }
        id={ id }
        category={ strCategory }
        title={ strDrink }
        img={ strDrinkThumb }
        ingredients={ ingredientsAndMeasuresList }
        alcohol={ strAlcoholic }
        instructions={ strInstructions }
      /> : <h1>Carregando...</h1> }

    </div>
  );
}

DrinkInProgress.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DrinkInProgress;
