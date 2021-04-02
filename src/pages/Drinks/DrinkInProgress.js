import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import InProgressCard from '../../components/Card/InProgressCard';
import { getDrinkFiltredById } from '../../services/api';

function DrinkInProgress(props) {
  const { match: { url, params: { id } } } = props;
  const history = useHistory();
  const [filteredById, setFilteredById] = useState('');
  const [ingredientsAndMeasuresList, setIngredientsAndMeasuresList] = useState([]);
  const isEmpty = (obj) => Object.keys(obj).length === 0; // verifica se o objeto está vazio;

  const { strCategory,
    strDrink, strDrinkThumb, strAlcoholic, strInstructions } = filteredById;

  const copyFunction = () => {
    copy(window.location.href.replace('/in-progress', ''));
    setCopied(!copied);
  };

  const buttonsDiv = (
    <div className="button-container">
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyFunction }
      >
        {copied ? 'Link copiado!' : 'Compartilhar'}
      </button>

      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Finalizar
      </button>
    </div>);

  const createIngredientList = (receita) => {
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
  };

  useEffect(() => {
    const requestingAPI = async () => {
      const fetchById = await getDrinkFiltredById(id);
      setFilteredById(fetchById);
    }; requestingAPI();
  }, [id]);

  function handleFavorite() {
    const newRecipe = {
      id,
      type: 'bebida',
      area: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    updateFavorites(newRecipe, isFavorite);
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    if (!isEmpty(filteredById)) {
      createIngredientList(filteredById);
    }
  }, [filteredById]);

  return (
    <main>
      {!isEmpty(filteredById)
        ? (
          <section>
            <InProgressCard
              url={ url }
              id={ id }
              category={ strCategory }
              title={ strDrink }
              img={ strDrinkThumb }
              ingredients={ ingredientsAndMeasuresList }
              alcohol={ strAlcoholic }
              instructions={ strInstructions }
            />
            {buttonsDiv}
          </section>)
        : <h1>Carregando bebida...</h1> }
    </main>
  );
}

DrinkInProgress.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DrinkInProgress;
