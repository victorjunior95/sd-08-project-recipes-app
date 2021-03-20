export function saveOnStorage(key, value) {
  const stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}

export function loadFromStorage(key) {
  const stringValue = localStorage.getItem(key);
  return JSON.parse(stringValue);
}

export function validateLogin(email, passLength) {
  const regexEmail = /^[^@\s]+@[^@\s.]+\.[^@.\s]+$/i;
  const minPassLength = 6;
  return !(passLength >= minPassLength && email.match(regexEmail));
}
