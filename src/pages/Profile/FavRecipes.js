import React from 'react';
import Header from '../../components/Header';

function FavRecipes() {
  const favorites = localStorage.getItem('favoriteRecipes');
  console.log(favorites);
  return (
    <div>
      <Header name="Receitas Favoritas" icon="false" />
      as
    </div>
  );
}

export default FavRecipes;
