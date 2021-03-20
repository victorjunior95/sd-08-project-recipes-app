const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchDrinksById = (id) => fetch(DRINKS_URL + id);

export default fetchDrinksById;
