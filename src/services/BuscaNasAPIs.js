export const getComidasRandom = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
);

export const getBebidasRandom = () => (
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
);
