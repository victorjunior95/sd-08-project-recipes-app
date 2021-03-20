export default async function getApi(URL, type) {
  const response = await fetch(URL);
  const result = await response.json();
  return result[type];
}
