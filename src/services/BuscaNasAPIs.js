const getComidasByName = (nome) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
);

export default getComidasByName;

export const getComidasByIngredientes = (ingrediente) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
);

export const getComidasByPrimeiraLetra = (primeiraLetra) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
);
