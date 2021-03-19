import { createStore } from 'redux';

const INITIAL_STATE = {
  rota: 'alguem@email.com',
  detalhes: {},
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GERA_ROTA':
    return { ...state, rota: action.rota };
  case 'COMIDA_DETALHES':
    return { ...state, detalhes: action.detalhes };
  default:
    return state;
  }
}

const store = createStore(reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
