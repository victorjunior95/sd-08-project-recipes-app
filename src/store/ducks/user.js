export const Types = {
  LOGIN: 'LOGIN',
};

const INITIAL_STATE = {
  isAuthenticated: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case Types.LOGIN:
    return { ...state, isAuthenticated: true };
  default: return state;
  }
};

export const Creators = {
  login: (userData) => ({
    type: Types.LOGIN,
    payload: userData,
  }),
};

export default user;
