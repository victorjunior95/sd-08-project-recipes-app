// import md5 from 'crypto-js/md5';
// Biblioteca que gera Hash
// Tem que começar com 1 para passar no teste

export const setMealsToken = () => {
  // const mealsToken =
  localStorage.setItem('mealsToken', '1');
};
export const setCocktailsToken = () => {
  // const cocktailsToken =
  localStorage.setItem('cocktailsToken', '1');
};

export const setUser = (email) => {
  // const hashEmail = md5(email);
  const objEmail = { email };
  localStorage.setItem('user', JSON.stringify(objEmail));
};

export const setDoneRecipes = (recipes) => localStorage
  .setItem('doneRecipes', JSON.stringify(recipes));
// a chave doneRecipes deve conter a seguinte estrutura:
// [{
//     id: id-da-receita,
//     type: comida-ou-bebida,
//     area: area-da-receita-ou-texto-vazio,
//     category: categoria-da-receita-ou-texto-vazio,
//     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//     name: nome-da-receita,
//     image: imagem-da-receita,
//     doneDate: quando-a-receita-foi-concluida,
//     tags: array-de-tags-da-receita-ou-array-vazio
// }]

export const setFavoriteRecipes = (recipes) => localStorage
  .setItem('favoriteRecipes', JSON.stringify(recipes));
// a chave favoriteRecipes deve conter a seguinte estrutura:
// [{
//     id: id-da-receita,
//     type: comida-ou-bebida,
//     area: area-da-receita-ou-texto-vazio,
//     category: categoria-da-receita-ou-texto-vazio,
//     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//     name: nome-da-receita,
//     image: imagem-da-receita
// }]
export const setInProgressRecipes = (recipes) => localStorage
  .setItem('favoriteRecipes', JSON.stringify(recipes));
// a chave inProgressRecipes deve conter a seguinte estrutura:
// {
//     cocktails: {
//         id-da-bebida: [lista-de-ingredientes-utilizados],
//         ...
//     },
//     meals: {
//         id-da-comida: [lista-de-ingredientes-utilizados],
//         ...
//     }
// }
