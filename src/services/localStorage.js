export function getlocalStorage(key) {
  const currentKey = JSON.parse(localStorage.getItem(key));
  return currentKey;
}

export function setLocalStorage(keyName, value) {
  JSON.stringify(localStorage.setItem(keyName, value));
}
