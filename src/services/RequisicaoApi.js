export default async function fetchReceitas(props) {
  const url = `https://www.themealdb.com/api/json/v1/1/list.php?${props}=list`;
  const requestReturn = await fetch(url);
  const requestObject = await requestReturn.json();
  return requestObject;
}
