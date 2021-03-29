import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import './recipesFavDone.css';
import CardRecipe from '../../components/CardRecipe/CardRecipe';
import { useHistory } from 'react-router';

const RecipesFavDone = ({ title, visible }) => {
  const history  = useHistory()
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('doneRecipes') === null) {
      localStorage.setItem('doneRecipes', JSON.stringify([]));
    }
    if (localStorage.getItem('favoriteRecipes') === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    const localFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const localDone = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes(localDone);
    setFavoriteRecipes(localFavorite);
  }, []);




  const filterBy = (type)=>{
    if(localStorage.getItem('doneRecipes')){
      if(type === 'food'){
        
        const getRecipes =JSON.parse(localStorage.getItem('doneRecipes'))
         const filterFood = getRecipes.filter(({type})=>type ==='comida' )
         console.log(filterFood)
         setDoneRecipes(filterFood) 
      }else if(type === 'drink'){
        const getRecipes =JSON.parse(localStorage.getItem('doneRecipes'))
        const filterDrink = getRecipes.filter(({type})=>type ==='bebida' )
        console.log(filterDrink)
        setDoneRecipes(filterDrink) 
      }else if(type === 'all'){
        const getRecipes =JSON.parse(localStorage.getItem('doneRecipes'))
        setDoneRecipes(getRecipes)

      }
    }
  }

  const redirectTo = (id,type)=>{
    if(type === 'comida'){
      history.push(`/comidas/${id}`)
    }else{
      history.push(`/bebidas/${id}`)
    }
    console.log('clicou')

  }
  
  return (
    <div>
      <Header title={title} visible={visible} />
      <div
        className="btn-group btn-filters"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          className="btn btn-info"
          onClick ={()=>filterBy('all')}
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick ={()=>filterBy('food')}
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          className="btn btn-info"
        onClick ={()=>filterBy('drink')}
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      {title === 'Receitas Feitas' &&
        doneRecipes.length > 0 &&
        doneRecipes.map((recipe, index) => (
          <button key={index}    onClick = {()=>redirectTo(recipe.id,recipe.type)}>

          <CardRecipe
            key={index}
            id={recipe.id}
            type={recipe.type}
            index={index}
            image={recipe.image}
            alcoholicOrNot={recipe.alcoholicOrNot}
            area={recipe.area}
            category={recipe.category}
            name={recipe.name}
            doneDate={recipe.doneDate}
            tags={recipe.tags}
            />
            </button>
        ))}
      {title === 'Receitas Favoritas' &&
        favoriteRecipes.length > 0 &&
        favoriteRecipes.map((recipe, index) => (
          <CardRecipe
            key={index}
            id={recipe.id}
            type={recipe.type}
            index={index}
            image={recipe.image}
            alcoholicOrNot={recipe.alcoholicOrNot}
            area={recipe.area}
            category={recipe.category}
            name={recipe.name}
            doneDate={null}
            tags={null}
            favorite={true}
          />
        ))}
    </div>
  );
};

RecipesFavDone.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default RecipesFavDone;
