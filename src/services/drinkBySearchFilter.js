const getUrlByFilter = (filter, text) => {
  switch (filter) {
  case 'ingredient':
    return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${text}`;
  case 'name':
    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
  case 'firstletter':
    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${text[0]}`;
  default:
    break;
  }
};

const fetchByDrinkFilters = async (inputs, setIsLoading, setDrinkData) => {
  const { text, radio } = inputs;
  setIsLoading(true);
  const data = await fetch(getUrlByFilter(radio, text));
  const json = await data.json();
  setIsLoading(false);
  setDrinkData(json.drinks);
};

export default fetchByDrinkFilters;
