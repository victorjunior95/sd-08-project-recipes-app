// const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`;

export default async function fetchFood(searchParam) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/${searchParam}`)
    .then((response) => response.json());
}

// export async function fetchDrink(searchParam) {
//   return fetch(`https://www.themealdb.com/api/json/v1/1/${searchParam}`)
//     .then((response) => response.json());
// }
