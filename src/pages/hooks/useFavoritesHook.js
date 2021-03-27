import { useState, useEffect } from 'react';

const useFavoritesHook = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem('favoriteRecipes');
    setFavorites(list);
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

  const updateFavorites = (recipe) => {
    const newFavorites = [...favorites, recipe];
    console.log('newfavorites: ', newFavorites);
    setFavorites(newFavorites);
  };

  return [favorites, updateFavorites];
};

export default useFavoritesHook;
