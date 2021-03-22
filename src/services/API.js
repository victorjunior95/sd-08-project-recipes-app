// import React, { useEffect } from 'react';

const endpointIngredient = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
// const endpointNome = 'https://www.themealdb.com/api/json/v1/1/search.php?s={nome}';
// const endpointPrimeiraLetra = 'https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}';

const getIngredients = (ingrediente) => {
  fetch(`${endpointIngredient}${ingrediente}`)
    .then((response) => response.json())
    .then(({ meals }) => console.log(meals));
};
export default getIngredients;
