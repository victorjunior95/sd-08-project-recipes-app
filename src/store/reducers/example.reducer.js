const INITIAL_GAME_CONFIG = null;

export default function reducer(state = INITIAL_GAME_CONFIG, action) {
  const { type, payload } = action;
  switch (type) {
  case 'UPDATE_DATA':
    return payload;

  default:
    return state;
  }
}
