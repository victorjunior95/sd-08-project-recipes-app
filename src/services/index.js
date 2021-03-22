export const headerSearch = async (search, type) => {
  let results = {};
  if (type === 'ingredients') {
    results = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
      .then((response) => response.json());
  } else if (type === 'name') {
    results = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json());
  } else {
    if (search.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }
    results = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then((response) => response.json());
  }
  return results;
};

export const algumacoisa = 'dsfdsfdf';
