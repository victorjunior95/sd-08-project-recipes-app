import { useState, useEffect } from 'react';

const useFavoritesHook = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favList = localStorage.getItem('favoriteRecipes') || [];
    setFavorites(favList);
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', favorites);
  }, [favorites]);

  const updateFavorites = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  return [favorites, updateFavorites];
};

export default useFavoritesHook;
