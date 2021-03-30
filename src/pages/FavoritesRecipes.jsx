import React, { useState } from 'react';
import Header from '../components/Header';
import CategoriesContainer from '../components/CategoriesContainer';
import CardFavoritRecipe from '../components/CardFavoriteRecipe';
import { getFavoriteRecipes } from '../services/getLocalStorage';

function FavoritesRecipes() {
  const favoriteRecipes = getFavoriteRecipes() || [];
  const [shoulUpdate, setShouldUpdate] = useState(false);
  const handleClick = () => {
    setShouldUpdate(!shoulUpdate);
  };
  return (
    <section>
      <Header label="Receitas Favoritas" Search={ () => '' } />
      <CategoriesContainer page="Favoritas" />
      {favoriteRecipes.map((favorite, index) => {
        const {
          id,
          type,
          area,
          category,
          alcoholicOrNot,
          name,
          image,
        } = favorite;
        return (
          <CardFavoritRecipe
            key={ id }
            imgPath={ image }
            title={ name }
            category={ type === 'bebida' ? alcoholicOrNot : category }
            page={ type.concat('s') }
            id={ id }
            area={ area }
            drinkCategory={ alcoholicOrNot }
            index={ index }
            callback={ handleClick }
          />
        );
      })}
    </section>
  );
}

export default FavoritesRecipes;
