export function checkFavoritesLocal(currentId) {
  const favoritos = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  // return favoritos.map(({ id }) => id).includes(currentId);
  return favoritos.some(({ id }) => id === currentId);
}

export function addFavoritesLocal(obj) {
  const favoritos = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  favoritos.push(obj);
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoritos));
}

export function removeFavoritesLocal(currentId) {
  const favoritos = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const filtered = favoritos.filter(({ id }) => id !== currentId);
  localStorage.setItem('favoriteRecipes', JSON.stringify(filtered));
}
