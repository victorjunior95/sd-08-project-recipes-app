export const getComidasRandom = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
);

const getComidasByName = (nome) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
);

export default getComidasByName;

export const getBebidasRandom = () => (
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
);

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

export const getBebidasByingredientes = (ingrediente) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
);

export const getBebidasByName = (nome) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
);

export const getBebidasByPrimeiraLetra = (primeiraLetra) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
);

export async function getReceitaBebidasDetalhesPorId(id) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const details = await response.json();
  return details.drinks;
}

export async function getReceitaComidasDetalhesPorId(id) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const details = await response.json();
  return details.meals;
}
