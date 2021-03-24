export default async function theMeadlDB(radio, inputName) {
  if (radio === 'Ingrediente') {
    const url = await `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputName}`;
    return url;
  }
  if (radio === 'Nome') {
    const url = await `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`;
    return url;
  }
  if (radio === 'Primeira Letra') {
    const url = await `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputName}`;
    return url;
  }
}
